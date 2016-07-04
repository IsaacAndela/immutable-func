/*eslint-disable max-len*/
import {Map, Set, List, Stack, Record, Seq, OrderedMap, OrderedSet} from 'immutable';
import {funcItUp} from './funcItUp.js';
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
	Seq.Indexed,
	Seq.Keyed,
	Seq.Set,
]);

const hasInfiniteArity = (func) => /\barguments\b/.test(func.toString());

const getArity = (func) => (
	hasInfiniteArity(func) ?
		Infinity :
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
