/*eslint-disable max-len*/
import {Map, Set, List, Stack, Record, Seq, OrderedMap, OrderedSet} from 'immutable';
import {funcItUp} from './funcItUp.js';
/*eslint-enable max-len*/

const isFunction = (val) => typeof val === 'function';

const startsWithLetter = (str) => /^[a-zA-Z]/.test(str);

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

const prototypes = constructors.map((constructor) => constructor.prototype);

// console.log('prototypes', prototypes);

const filterFunctions = (obj) => {
	let memo = Set();

	for (let key in obj) {
		const val = obj[key];

		if (isFunction(val) && startsWithLetter(key)) {
			memo = memo.add(key);
		}
	}

	return memo;
};

export const functionKeys = prototypes.reduce((memo, prototype) => (
	memo.union(filterFunctions(prototype))
), Set()).sort();

const immutableFunc = functionKeys.reduce((obj,
	functionKey) => {
	obj[functionKey] = funcItUp(functionKey);

	return obj;
}, {});

export default immutableFunc;
