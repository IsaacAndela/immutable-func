import test from 'ava';
import {Map} from 'immutable';
import immutableFunc, {functionKeys} from './immutableFunc';

test('immutableFunc', (t) => {
	const x = Map();
	console.log(functionKeys);
	t.is(Object.keys(immutableFunc).length, 95, 'fo shizzle');
	t.deepEqual(immutableFunc.set, {a: 1});
});
