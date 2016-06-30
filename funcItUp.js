const curry1 = (arity, fn, ...args) => (
	(args.length >= arity) ?
		fn(...args) :
		(...nextArgs) => curry1(arity, fn, ...args, ...nextArgs)
);

export const curryArity = (arity, fn) => (...args) => (
	curry1(arity, fn, ...args)
);

const getArity = (fn) => typeof fn === 'function' ? fn.length : 0;

export const curry = (fn) => curryArity(getArity(fn), fn);


const negate = (fn) => (...args) => !fn(...args);
const unexisting = (obj) => obj === null || typeof obj === 'undefined';
const existing = negate(unexisting);

const getEmtpyOfType = (obj) => Array.isArray(obj) ? [] : {};
const copy = (obj) => Object.assign(getEmtpyOfType(obj), obj);

export const set = curry((key, value, obj) => {
	if (unexisting(obj)) {
		return obj;
	} else if (obj.hasOwnProperty(key) && Object.is(obj[key], value)) {
		return obj;
	} else {
		const newObj = copy(obj);
		newObj[key] = value;

		return newObj;
	}
});

export const get = curry ((key, obj) => existing(obj) ? obj[key] : undefined);

const execute = (methodName, args, obj) => {
	if (unexisting(obj)) {
		return obj;
	} else if (obj[methodName] === 'function') {
		return obj[methodName](...args);
	} else if (methodName === 'get') {
		return get(args[0], obj);
	} else if (methodName === 'set') {
		return set(args[0], args[1], obj);
	} else {
		return obj;
	}
}

export const funcItUpWithArity = (methodName, arity) => (
	curryArity(arity, (...args) => (
		(obj) => execute(methodName, args, obj)
	))
);

export const funcItUpWithLimit = (methodName, limit) => (
	curryArity(limit, (...args) => (
		(obj) => execute(methodName, args.slice(0, limit), obj)
	))
);

// export const funcItUp = (methodName) => (...args) => (obj) => (
// 	execute(methodName, args, obj)
// );

export const funcItUp = (methodName) => {
	const execMethod = (...args) => (obj) => execute(methodName, args, obj);

	execMethod.withArity = (arity) => funcItUpWithArity(methodName, arity);
	execMethod.withLimit = (limit) => funcItUpWithLimit(methodName, limit);

	return execMethod;
};


// const set = funcItUpWithArity('set', 2);
//
// const setTest = set('test');
//
// setTest(5)(obj);

// Example
// funcItUp('reduce')((n1, n2) => n1 + n2)([1,2,3]);
//
// const reduce = funcItUp('reduce');
//
// const addList = reduce((n1, n2) => n1 + n2);
// addList([1,2,3]);
//
// x = Immutable.List([1,2,3]);
//
// x.reduce()
// addList(x);
