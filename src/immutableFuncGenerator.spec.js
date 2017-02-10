const {getImmutableInfo, getCode} = require('./immutableFuncGenerator');
const {List, Map} = require('immutable');

const getArityType = (arity) => {
	switch (arity) {
		case 0:
			return 'zeroArity';

		case Infinity:
			return 'unknownArity';

		default:
			return 'regularArity';
	}
};
const push = (val) => (list = List()) => list.push(val);

const addMethodToArityGroup = (groupedByArity, methodInfo) => {
	const arityType = getArityType(methodInfo.get('arity'));
	const methodName = methodInfo.get('methodName');

	return groupedByArity.update(arityType, push(methodName));
};

describe('methodsByArity', () => {
	const immutableInfo = getImmutableInfo();
	const methodsByArity = immutableInfo.reduce(addMethodToArityGroup, Map());

	it('should find all functions with unknown arity', () => {
		expect(methodsByArity.get('unknownArity')).toMatchSnapshot();
	});
	it('should find all functions with regular arity', () => {
		expect(methodsByArity.get('regularArity')).toMatchSnapshot();
	});
	it('should find all functions with zero arity', () => {
		expect(methodsByArity.get('zeroArity')).toMatchSnapshot();
	});
});

it('should generate the code for immutable funcs', () => {
	expect(getCode()).toMatchSnapshot();
});
