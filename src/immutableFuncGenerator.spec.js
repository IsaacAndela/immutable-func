const {
	generateMethodWithArgs,
	generateMethodWithoutArgs,
	getImmutableInfoGroups,
	getCode,
} = require('./immutableFuncGenerator');
const {List, Map} = require('immutable');



const getArityType = (arity) => {
	if (arity === 0) {
		return 'zeroArity';
	} else if (arity === Infinity) {
		return 'unknownArity';
	} else if (typeof arity === 'number') {
		return 'regularArity';
	}
};
const getMethodName = (methodInfo) => methodInfo.get('methodName');
const push = (val) => (list = List()) => list.push(val);

const addMethodToArityGroup = (groupedByArity, methodInfo) => {
	const arityType = getArityType(methodInfo.get('arity'));
	const methodName = getMethodName(methodInfo);

	return groupedByArity.update(arityType, push(methodName));
};

const immutableInfoGroups = getImmutableInfoGroups();



// **** Start of tests **** //

describe('methodsByArity', () => {

	const immutableInfoMatches = immutableInfoGroups.get('matches');

	const methodsByArity = immutableInfoMatches.reduce(
		addMethodToArityGroup, Map()
	);

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

it('should generate functions with arguments correctly', () =>{
	const result = generateMethodWithArgs('takeWhile', 2);
	const expectedResult =
`// Arity: 2
export const takeWhile = (...args) => (obj) => (
	(obj != null && typeof obj.takeWhile === 'function') ?
		obj.takeWhile(...args) :
		undefined
);
`;
	expect(result).toBe(expectedResult);
});

it('should generate functions without arguments correctly', () => {
	const result = generateMethodWithoutArgs('toArray');
	const expectedResult =
`// Arity: 0
export const toArray = (obj) => (
	(obj != null && typeof obj.toArray === 'function') ?
		obj.toArray() :
		undefined
);
`;
	expect(result).toBe(expectedResult);
});

it(
	'should reject quasi-private methods and methods with problematic names',
	() => {
		const rejections = immutableInfoGroups.get('rejections');
		const rejectedNames = rejections.map(getMethodName);

		expect(rejectedNames).toMatchSnapshot();
	}
);

it('should generate the code for immutable funcs', () => {
	expect(getCode()).toMatchSnapshot();
});
