/*eslint-env node*/

/*eslint-disable max-len*/
const {analyze} = require('escope');
const {parse: getAbstractSyntaxTree} = require('esprima');
const {Map, Set, List, Stack, Record, Seq, OrderedMap, OrderedSet, fromJS} = require('immutable');
const {writeFileSync} = require('fs');
/*eslint-enable max-len*/

const executeWith = (arg, fn) => fn(arg);

const composeLeft = (...fns) => (arg) => fns.reduce(executeWith, arg);

const isFunction = (val) => typeof val === 'function';

const tryIt = (expression) => {
	try {
		expression();
		return true;
	} catch (e) {
		return false;
	}
};

// See the section on:
// Non-reserved words that act like reserved words
// https://mathiasbynens.be/notes/javascript-identifiers
const isUnassignableVarName = (str) => (
	!['undefined', 'Infinity', 'NaN'].includes(str)
);

const isAllowedVarName = (str) => (
	// Only methods that start with a letter and
	// contain only letters, numbers and underscores
	// This is done to exclude quasi-private methods like "__toJS"
	/^[a-zA-Z][_a-zA-Z0-9]*$/.test(str) &&
	isUnassignableVarName(str) &&
	tryIt(() => {
		'use strict';
		// Test str is a valid variable name
		eval(`let ${str};`);
	})
);

const isNotConstructor = (methodName) => (methodName !== 'constructor');

const getFuncString = (func) => `var x = ${func.toString()}`;

const getScopes = (abstractSyntaxTree) => analyze(abstractSyntaxTree).scopes;

const findFuncScope = (scopes) => (
	scopes.find((scope) => (
		scope.type === 'function'
	))
);

const isReferencingArguments = (scope) => (
	scope.hasOwnProperty('variables') &&
	scope.variables.some((variable) => (
		variable.name === 'arguments' &&
		variable.hasOwnProperty('references') &&
		variable.references.length > 0
	))
);

const isScopeReferencingArguments = composeLeft(
	getScopes,
	findFuncScope,
	isReferencingArguments
);

const getAstBody = (ast) => fromJS(ast).get('body').first();
const getAstFuncDeclaration = (astBody) => astBody.get('declarations').first();
const getAstParams = (funcDeclaration) => (
	funcDeclaration.getIn(['init', 'params'], List())
);
const isAstRestParam = (param) => param.get('type') === 'RestElement';
const hasAstRestParam = (params) => params.some(isAstRestParam);

const hasRestParam = composeLeft(
	getAstBody,
	getAstFuncDeclaration,
	getAstParams,
	hasAstRestParam
);

// A function has an undefined arity if the arguments object
// is referenced in its scope or
// if it has a rest param
const hasUndefinedArity = composeLeft(
	getFuncString,
	getAbstractSyntaxTree,
	(ast) => (
		isScopeReferencingArguments(ast) ||
		hasRestParam(ast)
	)
);

const getArity = (func) => (
	hasUndefinedArity(func) ?
		Infinity :
		func.length
);

// Handwork in case method and arity detection cannot be determined automaticly
const manualCorrections = (methodInfo) => {
	if (
		methodInfo.get('methodName') === 'shift' &&
		methodInfo.get('arity') === Infinity
	) {
		return methodInfo.set('arity', 0);
	} else {
		return methodInfo;
	}
};

const filterMethods = (obj) => {
	let matches = Set().asMutable();
	let rejections = Set().asMutable();

	// Using "for ... in" to iterate over all enumarable properties
	// including those up the prototype chain
	for (let methodName in obj) {
		const maybeFunc = obj[methodName];

		if (
			isFunction(maybeFunc) &&
			isNotConstructor(methodName)
		) {
			if (
				isAllowedVarName(methodName)
			) {
				const methodInfo = Map([
					['methodName', methodName],
					['arity', getArity(maybeFunc)],
				]);
				matches.add(manualCorrections(methodInfo));
			} else {
				try {
					getArity(maybeFunc);
				} catch (e) {
					console.log(methodName, maybeFunc.toString());
				}
				const methodInfo = Map([
					['methodName', methodName],
					['arity', getArity(maybeFunc)],
				]);
				rejections.add(methodInfo);
			}
		}
	}

	return {
		'matches': matches.asImmutable(),
		'rejections': rejections.asImmutable(),
	};
};

const getPrototype = (constructor) => constructor.prototype;

const getPrototypes = (constructors) => constructors.map(getPrototype);


const addToSet = (iterable) => (set = Set()) => set.union(iterable);

const addMethodsFromPrototype = (methodInfoGroups, prototype) => {
	const {matches, rejections} = filterMethods(prototype);
	return methodInfoGroups
		.update('matches', addToSet(matches))
		.update('rejections', addToSet(rejections));
};

const sortByMethodName = (iterable) => (
	iterable.sortBy((methodInfo) => methodInfo.get('methodName'))
);

const getMethodInfoGroups = (constructors) => (
	getPrototypes(constructors)
		.reduce(addMethodsFromPrototype, Map())
		.update('matches', sortByMethodName)
		.update('rejections', sortByMethodName)
);

const generateMethodCheck = (methodName) => (
	`(obj != null && typeof obj.${methodName} === 'function')`
);

const generateMethodWithArgs = (methodName, arity) => (
`// Arity: ${arity}
export const ${methodName} = (...args) => (obj) => (
	${generateMethodCheck(methodName)} ?
		obj.${methodName}(...args) :
		undefined
);
`
);
exports.generateMethodWithArgs = generateMethodWithArgs;

const generateMethodWithoutArgs = (methodName) => (
`// Arity: 0
export const ${methodName} = (obj) => (
	${generateMethodCheck(methodName)} ?
		obj.${methodName}() :
		undefined
);
`
);
exports.generateMethodWithoutArgs = generateMethodWithoutArgs;

const generateMethod = (methodInfo) => {
	const methodName = methodInfo.get('methodName');
	const arity = methodInfo.get('arity');

	return (
		arity > 0 ?
			generateMethodWithArgs(methodName, arity) :
			generateMethodWithoutArgs(methodName)
	);
};

const generateMethodLines = (methodInfoList) => (
	methodInfoList.map(generateMethod)
);

const generateCode = (methodInfoList) => (
	generateMethodLines(methodInfoList).join('\n')
);

const getConstructors = () => (
	List([
		Map,
		Set,
		List,
		Stack,
		Record,
		OrderedMap,
		OrderedSet,
		Seq,
	])
);

const getImmutableInfoGroups = composeLeft(
	getConstructors,
	getMethodInfoGroups
);

exports.getImmutableInfoGroups = getImmutableInfoGroups;

const getMatches = (infoGroup) => infoGroup.get('matches');

const getCode = composeLeft(getImmutableInfoGroups, getMatches, generateCode);
exports.getCode = getCode;

const writeImmutableFuncFile = (fileName) => {
	const code = getCode();

	writeFileSync(fileName, code);
};
exports.writeImmutableFuncFile = writeImmutableFuncFile;
