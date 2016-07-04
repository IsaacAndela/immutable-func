import test from 'ava';
import {Map} from 'immutable';
import immutableFunc, {functionKeys} from './immutableFunc';

test('immutableFunc', (t) => {
	console.log(functionKeys.toList().map((entry) => (
		`${entry.get('methodName')}: ${entry.get('arity')}`
	)).join('\n'));
	t.is(Object.keys(immutableFunc).length, 124, 'fo shizzle');
});
