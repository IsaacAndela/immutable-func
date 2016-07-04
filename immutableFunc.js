/*eslint-disable max-len*/
import {analyze} from 'escope';
import {parse} from 'esprima';
import {fromJS, Map, Set, List, Stack, Record, Seq, OrderedMap, OrderedSet} from 'immutable';
import {funcItUp, pipe} from './funcItUp.js';
/*eslint-enable max-len*/

const isFunction = (val) => typeof val === 'function';

const startsWithLetter = (str) => /^[a-zA-Z]/.test(str);

const isNotConstructor = (methodName) => (methodName !== 'constructor');

const constructors = List([
	Map,
	Set,
	List,
	Stack,
	Record,
	OrderedMap,
	OrderedSet,
	Seq,
]);

const getFuncString = (func) => `var x = ${func.toString()}`;

const getScopes = (source) => {
    const ast = parse(source);
    const scopes = analyze(ast).scopes;

	return scopes;
};

const findFuncScope = (scopes) => (
	scopes.find((scope) => (
		scope.type === 'function' &&
		scope.hasOwnProperty('upper') &&
		scope.upper.type) === 'global'
	)
);

const isReferencingArguments = (scope) => (
	scope.hasOwnProperty('variables') &&
	scope.variables.some((variable) => (
		variable.name === 'arguments' &&
		variable.hasOwnProperty('references') &&
		variable.references.length > 0
	))
);

const hasNoArity = pipe(
	getFuncString,
	getScopes,
	findFuncScope,
	isReferencingArguments
);

const getArity = (func) => (
	hasNoArity(func) ?
		-1 :
		func.length
);

const prototypes = constructors.map((constructor) => constructor.prototype);

// console.log('prototypes', prototypes);

const filterFunctions = (obj) => {
	let memo = Set();

	for (let key in obj) {
		const val = obj[key];

		if (
			isFunction(val) &&
			startsWithLetter(key) &&
			isNotConstructor(key)
		) {
			memo = memo.add(Map([
				['methodName', key],
				['arity', getArity(val)],
			]));
		}
	}

	return memo;
};

export const functionKeys = prototypes.reduce((memo, prototype) => (
	memo.union(filterFunctions(prototype))
), Set()).sortBy((methodInfo) => methodInfo.get('methodName'));

const immutableFunc = functionKeys.reduce(
	(obj, methodInfo) => {
		const methodName = methodInfo.get('methodName');
		const arity = methodInfo.get('arity');

		obj[methodName] = funcItUp(methodName, arity);

		return obj;
}, {});

export default immutableFunc;
