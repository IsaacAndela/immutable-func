import {fromJS} from 'immutable';
import * as funcs from '../immutableFunc';

const {get} = funcs;

it('should have converted all methods to functions', () => {
	expect(Object.keys(funcs)).toMatchSnapshot();
});

describe('get function', () => {
	it('should get a value', () => {
		const source = fromJS({a: 1});

		expect(get('a')(source)).toBe(1);
		expect(get('b')(source)).toBe(undefined);
	});

	it('should return undefined for objects without a get method', () => {
		expect(get('a')(undefined)).toBe(undefined);
		expect(get('a')()).toBe(undefined);
		expect(get('a')(null)).toBe(undefined);
		expect(get('a')({})).toBe(undefined);
		expect(get('a')([])).toBe(undefined);
	});
});
