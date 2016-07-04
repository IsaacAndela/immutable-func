import test from 'ava';
import {Map} from 'immutable';
import immutableFunc, {functionKeys} from './immutableFunc';

test('NoArity', (t) => {
	console.log(functionKeys.toList().map((entry) => (
		`${entry.get('methodName')}: ${entry.get('arity')}`
	)).join('\n'));
	t.is(
		functionKeys.countBy((entry) => entry.get('arity')).get(-1),
		20,
		'without arity count'
	);
});
test('immutableFunc', (t) => {
	t.is(Object.keys(immutableFunc).length, 124, 'total found');
});
