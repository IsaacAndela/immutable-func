import * as funcs from '../immutableFunc';

it('should have converted all methods to functions', () => {
	expect(Object.keys(funcs)).toMatchSnapshot();
});
