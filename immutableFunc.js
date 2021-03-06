// Arity: 1
export const add = (...args) => (obj) => (
	(obj != null && typeof obj.add === 'function') ?
		obj.add(...args) :
		undefined
);

// Arity: 0
export const asImmutable = (obj) => (
	(obj != null && typeof obj.asImmutable === 'function') ?
		obj.asImmutable() :
		undefined
);

// Arity: 0
export const asMutable = (obj) => (
	(obj != null && typeof obj.asMutable === 'function') ?
		obj.asMutable() :
		undefined
);

// Arity: 0
export const butLast = (obj) => (
	(obj != null && typeof obj.butLast === 'function') ?
		obj.butLast() :
		undefined
);

// Arity: 0
export const cacheResult = (obj) => (
	(obj != null && typeof obj.cacheResult === 'function') ?
		obj.cacheResult() :
		undefined
);

// Arity: 2
export const chain = (...args) => (obj) => (
	(obj != null && typeof obj.chain === 'function') ?
		obj.chain(...args) :
		undefined
);

// Arity: 0
export const clear = (obj) => (
	(obj != null && typeof obj.clear === 'function') ?
		obj.clear() :
		undefined
);

// Arity: Infinity
export const concat = (...args) => (obj) => (
	(obj != null && typeof obj.concat === 'function') ?
		obj.concat(...args) :
		undefined
);

// Arity: 1
export const contains = (...args) => (obj) => (
	(obj != null && typeof obj.contains === 'function') ?
		obj.contains(...args) :
		undefined
);

// Arity: 2
export const count = (...args) => (obj) => (
	(obj != null && typeof obj.count === 'function') ?
		obj.count(...args) :
		undefined
);

// Arity: 2
export const countBy = (...args) => (obj) => (
	(obj != null && typeof obj.countBy === 'function') ?
		obj.countBy(...args) :
		undefined
);

// Arity: 1
export const deleteIn = (...args) => (obj) => (
	(obj != null && typeof obj.deleteIn === 'function') ?
		obj.deleteIn(...args) :
		undefined
);

// Arity: 0
export const entries = (obj) => (
	(obj != null && typeof obj.entries === 'function') ?
		obj.entries() :
		undefined
);

// Arity: 0
export const entrySeq = (obj) => (
	(obj != null && typeof obj.entrySeq === 'function') ?
		obj.entrySeq() :
		undefined
);

// Arity: 1
export const equals = (...args) => (obj) => (
	(obj != null && typeof obj.equals === 'function') ?
		obj.equals(...args) :
		undefined
);

// Arity: 2
export const every = (...args) => (obj) => (
	(obj != null && typeof obj.every === 'function') ?
		obj.every(...args) :
		undefined
);

// Arity: 2
export const filter = (...args) => (obj) => (
	(obj != null && typeof obj.filter === 'function') ?
		obj.filter(...args) :
		undefined
);

// Arity: 2
export const filterNot = (...args) => (obj) => (
	(obj != null && typeof obj.filterNot === 'function') ?
		obj.filterNot(...args) :
		undefined
);

// Arity: 3
export const find = (...args) => (obj) => (
	(obj != null && typeof obj.find === 'function') ?
		obj.find(...args) :
		undefined
);

// Arity: 3
export const findEntry = (...args) => (obj) => (
	(obj != null && typeof obj.findEntry === 'function') ?
		obj.findEntry(...args) :
		undefined
);

// Arity: 2
export const findIndex = (...args) => (obj) => (
	(obj != null && typeof obj.findIndex === 'function') ?
		obj.findIndex(...args) :
		undefined
);

// Arity: 2
export const findKey = (...args) => (obj) => (
	(obj != null && typeof obj.findKey === 'function') ?
		obj.findKey(...args) :
		undefined
);

// Arity: 3
export const findLast = (...args) => (obj) => (
	(obj != null && typeof obj.findLast === 'function') ?
		obj.findLast(...args) :
		undefined
);

// Arity: 3
export const findLastEntry = (...args) => (obj) => (
	(obj != null && typeof obj.findLastEntry === 'function') ?
		obj.findLastEntry(...args) :
		undefined
);

// Arity: 2
export const findLastIndex = (...args) => (obj) => (
	(obj != null && typeof obj.findLastIndex === 'function') ?
		obj.findLastIndex(...args) :
		undefined
);

// Arity: 2
export const findLastKey = (...args) => (obj) => (
	(obj != null && typeof obj.findLastKey === 'function') ?
		obj.findLastKey(...args) :
		undefined
);

// Arity: 0
export const first = (obj) => (
	(obj != null && typeof obj.first === 'function') ?
		obj.first() :
		undefined
);

// Arity: 2
export const flatMap = (...args) => (obj) => (
	(obj != null && typeof obj.flatMap === 'function') ?
		obj.flatMap(...args) :
		undefined
);

// Arity: 1
export const flatten = (...args) => (obj) => (
	(obj != null && typeof obj.flatten === 'function') ?
		obj.flatten(...args) :
		undefined
);

// Arity: 0
export const flip = (obj) => (
	(obj != null && typeof obj.flip === 'function') ?
		obj.flip() :
		undefined
);

// Arity: 2
export const forEach = (...args) => (obj) => (
	(obj != null && typeof obj.forEach === 'function') ?
		obj.forEach(...args) :
		undefined
);

// Arity: 0
export const fromEntrySeq = (obj) => (
	(obj != null && typeof obj.fromEntrySeq === 'function') ?
		obj.fromEntrySeq() :
		undefined
);

// Arity: 2
export const get = (...args) => (obj) => (
	(obj != null && typeof obj.get === 'function') ?
		obj.get(...args) :
		undefined
);

// Arity: 2
export const getIn = (...args) => (obj) => (
	(obj != null && typeof obj.getIn === 'function') ?
		obj.getIn(...args) :
		undefined
);

// Arity: 2
export const groupBy = (...args) => (obj) => (
	(obj != null && typeof obj.groupBy === 'function') ?
		obj.groupBy(...args) :
		undefined
);

// Arity: 1
export const has = (...args) => (obj) => (
	(obj != null && typeof obj.has === 'function') ?
		obj.has(...args) :
		undefined
);

// Arity: 1
export const hasIn = (...args) => (obj) => (
	(obj != null && typeof obj.hasIn === 'function') ?
		obj.hasIn(...args) :
		undefined
);

// Arity: 0
export const hashCode = (obj) => (
	(obj != null && typeof obj.hashCode === 'function') ?
		obj.hashCode() :
		undefined
);

// Arity: 1
export const includes = (...args) => (obj) => (
	(obj != null && typeof obj.includes === 'function') ?
		obj.includes(...args) :
		undefined
);

// Arity: 1
export const indexOf = (...args) => (obj) => (
	(obj != null && typeof obj.indexOf === 'function') ?
		obj.indexOf(...args) :
		undefined
);

// Arity: 2
export const insert = (...args) => (obj) => (
	(obj != null && typeof obj.insert === 'function') ?
		obj.insert(...args) :
		undefined
);

// Arity: 0
export const inspect = (obj) => (
	(obj != null && typeof obj.inspect === 'function') ?
		obj.inspect() :
		undefined
);

// Arity: Infinity
export const interleave = (...args) => (obj) => (
	(obj != null && typeof obj.interleave === 'function') ?
		obj.interleave(...args) :
		undefined
);

// Arity: 1
export const interpose = (...args) => (obj) => (
	(obj != null && typeof obj.interpose === 'function') ?
		obj.interpose(...args) :
		undefined
);

// Arity: Infinity
export const intersect = (...args) => (obj) => (
	(obj != null && typeof obj.intersect === 'function') ?
		obj.intersect(...args) :
		undefined
);

// Arity: 0
export const isEmpty = (obj) => (
	(obj != null && typeof obj.isEmpty === 'function') ?
		obj.isEmpty() :
		undefined
);

// Arity: 1
export const isSubset = (...args) => (obj) => (
	(obj != null && typeof obj.isSubset === 'function') ?
		obj.isSubset(...args) :
		undefined
);

// Arity: 1
export const isSuperset = (...args) => (obj) => (
	(obj != null && typeof obj.isSuperset === 'function') ?
		obj.isSuperset(...args) :
		undefined
);

// Arity: 1
export const join = (...args) => (obj) => (
	(obj != null && typeof obj.join === 'function') ?
		obj.join(...args) :
		undefined
);

// Arity: 1
export const keyOf = (...args) => (obj) => (
	(obj != null && typeof obj.keyOf === 'function') ?
		obj.keyOf(...args) :
		undefined
);

// Arity: 0
export const keySeq = (obj) => (
	(obj != null && typeof obj.keySeq === 'function') ?
		obj.keySeq() :
		undefined
);

// Arity: 0
export const keys = (obj) => (
	(obj != null && typeof obj.keys === 'function') ?
		obj.keys() :
		undefined
);

// Arity: 0
export const last = (obj) => (
	(obj != null && typeof obj.last === 'function') ?
		obj.last() :
		undefined
);

// Arity: 1
export const lastIndexOf = (...args) => (obj) => (
	(obj != null && typeof obj.lastIndexOf === 'function') ?
		obj.lastIndexOf(...args) :
		undefined
);

// Arity: 1
export const lastKeyOf = (...args) => (obj) => (
	(obj != null && typeof obj.lastKeyOf === 'function') ?
		obj.lastKeyOf(...args) :
		undefined
);

// Arity: 2
export const map = (...args) => (obj) => (
	(obj != null && typeof obj.map === 'function') ?
		obj.map(...args) :
		undefined
);

// Arity: 2
export const mapEntries = (...args) => (obj) => (
	(obj != null && typeof obj.mapEntries === 'function') ?
		obj.mapEntries(...args) :
		undefined
);

// Arity: 2
export const mapKeys = (...args) => (obj) => (
	(obj != null && typeof obj.mapKeys === 'function') ?
		obj.mapKeys(...args) :
		undefined
);

// Arity: 1
export const max = (...args) => (obj) => (
	(obj != null && typeof obj.max === 'function') ?
		obj.max(...args) :
		undefined
);

// Arity: 2
export const maxBy = (...args) => (obj) => (
	(obj != null && typeof obj.maxBy === 'function') ?
		obj.maxBy(...args) :
		undefined
);

// Arity: Infinity
export const merge = (...args) => (obj) => (
	(obj != null && typeof obj.merge === 'function') ?
		obj.merge(...args) :
		undefined
);

// Arity: Infinity
export const mergeDeep = (...args) => (obj) => (
	(obj != null && typeof obj.mergeDeep === 'function') ?
		obj.mergeDeep(...args) :
		undefined
);

// Arity: Infinity
export const mergeDeepIn = (...args) => (obj) => (
	(obj != null && typeof obj.mergeDeepIn === 'function') ?
		obj.mergeDeepIn(...args) :
		undefined
);

// Arity: Infinity
export const mergeDeepWith = (...args) => (obj) => (
	(obj != null && typeof obj.mergeDeepWith === 'function') ?
		obj.mergeDeepWith(...args) :
		undefined
);

// Arity: Infinity
export const mergeIn = (...args) => (obj) => (
	(obj != null && typeof obj.mergeIn === 'function') ?
		obj.mergeIn(...args) :
		undefined
);

// Arity: Infinity
export const mergeWith = (...args) => (obj) => (
	(obj != null && typeof obj.mergeWith === 'function') ?
		obj.mergeWith(...args) :
		undefined
);

// Arity: 1
export const min = (...args) => (obj) => (
	(obj != null && typeof obj.min === 'function') ?
		obj.min(...args) :
		undefined
);

// Arity: 2
export const minBy = (...args) => (obj) => (
	(obj != null && typeof obj.minBy === 'function') ?
		obj.minBy(...args) :
		undefined
);

// Arity: 0
export const peek = (obj) => (
	(obj != null && typeof obj.peek === 'function') ?
		obj.peek() :
		undefined
);

// Arity: 0
export const pop = (obj) => (
	(obj != null && typeof obj.pop === 'function') ?
		obj.pop() :
		undefined
);

// Arity: Infinity
export const push = (...args) => (obj) => (
	(obj != null && typeof obj.push === 'function') ?
		obj.push(...args) :
		undefined
);

// Arity: 1
export const pushAll = (...args) => (obj) => (
	(obj != null && typeof obj.pushAll === 'function') ?
		obj.pushAll(...args) :
		undefined
);

// Arity: Infinity
export const reduce = (...args) => (obj) => (
	(obj != null && typeof obj.reduce === 'function') ?
		obj.reduce(...args) :
		undefined
);

// Arity: Infinity
export const reduceRight = (...args) => (obj) => (
	(obj != null && typeof obj.reduceRight === 'function') ?
		obj.reduceRight(...args) :
		undefined
);

// Arity: 1
export const remove = (...args) => (obj) => (
	(obj != null && typeof obj.remove === 'function') ?
		obj.remove(...args) :
		undefined
);

// Arity: 1
export const removeIn = (...args) => (obj) => (
	(obj != null && typeof obj.removeIn === 'function') ?
		obj.removeIn(...args) :
		undefined
);

// Arity: 0
export const rest = (obj) => (
	(obj != null && typeof obj.rest === 'function') ?
		obj.rest() :
		undefined
);

// Arity: 0
export const reverse = (obj) => (
	(obj != null && typeof obj.reverse === 'function') ?
		obj.reverse() :
		undefined
);

// Arity: 2
export const set = (...args) => (obj) => (
	(obj != null && typeof obj.set === 'function') ?
		obj.set(...args) :
		undefined
);

// Arity: 2
export const setIn = (...args) => (obj) => (
	(obj != null && typeof obj.setIn === 'function') ?
		obj.setIn(...args) :
		undefined
);

// Arity: 1
export const setSize = (...args) => (obj) => (
	(obj != null && typeof obj.setSize === 'function') ?
		obj.setSize(...args) :
		undefined
);

// Arity: 0
export const shift = (obj) => (
	(obj != null && typeof obj.shift === 'function') ?
		obj.shift() :
		undefined
);

// Arity: 1
export const skip = (...args) => (obj) => (
	(obj != null && typeof obj.skip === 'function') ?
		obj.skip(...args) :
		undefined
);

// Arity: 1
export const skipLast = (...args) => (obj) => (
	(obj != null && typeof obj.skipLast === 'function') ?
		obj.skipLast(...args) :
		undefined
);

// Arity: 2
export const skipUntil = (...args) => (obj) => (
	(obj != null && typeof obj.skipUntil === 'function') ?
		obj.skipUntil(...args) :
		undefined
);

// Arity: 2
export const skipWhile = (...args) => (obj) => (
	(obj != null && typeof obj.skipWhile === 'function') ?
		obj.skipWhile(...args) :
		undefined
);

// Arity: 2
export const slice = (...args) => (obj) => (
	(obj != null && typeof obj.slice === 'function') ?
		obj.slice(...args) :
		undefined
);

// Arity: 2
export const some = (...args) => (obj) => (
	(obj != null && typeof obj.some === 'function') ?
		obj.some(...args) :
		undefined
);

// Arity: 1
export const sort = (...args) => (obj) => (
	(obj != null && typeof obj.sort === 'function') ?
		obj.sort(...args) :
		undefined
);

// Arity: 2
export const sortBy = (...args) => (obj) => (
	(obj != null && typeof obj.sortBy === 'function') ?
		obj.sortBy(...args) :
		undefined
);

// Arity: Infinity
export const splice = (...args) => (obj) => (
	(obj != null && typeof obj.splice === 'function') ?
		obj.splice(...args) :
		undefined
);

// Arity: Infinity
export const subtract = (...args) => (obj) => (
	(obj != null && typeof obj.subtract === 'function') ?
		obj.subtract(...args) :
		undefined
);

// Arity: 1
export const take = (...args) => (obj) => (
	(obj != null && typeof obj.take === 'function') ?
		obj.take(...args) :
		undefined
);

// Arity: 1
export const takeLast = (...args) => (obj) => (
	(obj != null && typeof obj.takeLast === 'function') ?
		obj.takeLast(...args) :
		undefined
);

// Arity: 2
export const takeUntil = (...args) => (obj) => (
	(obj != null && typeof obj.takeUntil === 'function') ?
		obj.takeUntil(...args) :
		undefined
);

// Arity: 2
export const takeWhile = (...args) => (obj) => (
	(obj != null && typeof obj.takeWhile === 'function') ?
		obj.takeWhile(...args) :
		undefined
);

// Arity: 0
export const toArray = (obj) => (
	(obj != null && typeof obj.toArray === 'function') ?
		obj.toArray() :
		undefined
);

// Arity: 0
export const toIndexedSeq = (obj) => (
	(obj != null && typeof obj.toIndexedSeq === 'function') ?
		obj.toIndexedSeq() :
		undefined
);

// Arity: 0
export const toJS = (obj) => (
	(obj != null && typeof obj.toJS === 'function') ?
		obj.toJS() :
		undefined
);

// Arity: 0
export const toJSON = (obj) => (
	(obj != null && typeof obj.toJSON === 'function') ?
		obj.toJSON() :
		undefined
);

// Arity: 0
export const toKeyedSeq = (obj) => (
	(obj != null && typeof obj.toKeyedSeq === 'function') ?
		obj.toKeyedSeq() :
		undefined
);

// Arity: 0
export const toList = (obj) => (
	(obj != null && typeof obj.toList === 'function') ?
		obj.toList() :
		undefined
);

// Arity: 0
export const toMap = (obj) => (
	(obj != null && typeof obj.toMap === 'function') ?
		obj.toMap() :
		undefined
);

// Arity: 0
export const toObject = (obj) => (
	(obj != null && typeof obj.toObject === 'function') ?
		obj.toObject() :
		undefined
);

// Arity: 0
export const toOrderedMap = (obj) => (
	(obj != null && typeof obj.toOrderedMap === 'function') ?
		obj.toOrderedMap() :
		undefined
);

// Arity: 0
export const toOrderedSet = (obj) => (
	(obj != null && typeof obj.toOrderedSet === 'function') ?
		obj.toOrderedSet() :
		undefined
);

// Arity: 0
export const toSeq = (obj) => (
	(obj != null && typeof obj.toSeq === 'function') ?
		obj.toSeq() :
		undefined
);

// Arity: 0
export const toSet = (obj) => (
	(obj != null && typeof obj.toSet === 'function') ?
		obj.toSet() :
		undefined
);

// Arity: 0
export const toSetSeq = (obj) => (
	(obj != null && typeof obj.toSetSeq === 'function') ?
		obj.toSetSeq() :
		undefined
);

// Arity: 0
export const toSource = (obj) => (
	(obj != null && typeof obj.toSource === 'function') ?
		obj.toSource() :
		undefined
);

// Arity: 0
export const toStack = (obj) => (
	(obj != null && typeof obj.toStack === 'function') ?
		obj.toStack() :
		undefined
);

// Arity: 0
export const toString = (obj) => (
	(obj != null && typeof obj.toString === 'function') ?
		obj.toString() :
		undefined
);

// Arity: Infinity
export const union = (...args) => (obj) => (
	(obj != null && typeof obj.union === 'function') ?
		obj.union(...args) :
		undefined
);

// Arity: Infinity
export const unshift = (...args) => (obj) => (
	(obj != null && typeof obj.unshift === 'function') ?
		obj.unshift(...args) :
		undefined
);

// Arity: 1
export const unshiftAll = (...args) => (obj) => (
	(obj != null && typeof obj.unshiftAll === 'function') ?
		obj.unshiftAll(...args) :
		undefined
);

// Arity: Infinity
export const update = (...args) => (obj) => (
	(obj != null && typeof obj.update === 'function') ?
		obj.update(...args) :
		undefined
);

// Arity: 3
export const updateIn = (...args) => (obj) => (
	(obj != null && typeof obj.updateIn === 'function') ?
		obj.updateIn(...args) :
		undefined
);

// Arity: 0
export const valueSeq = (obj) => (
	(obj != null && typeof obj.valueSeq === 'function') ?
		obj.valueSeq() :
		undefined
);

// Arity: 0
export const values = (obj) => (
	(obj != null && typeof obj.values === 'function') ?
		obj.values() :
		undefined
);

// Arity: 0
export const wasAltered = (obj) => (
	(obj != null && typeof obj.wasAltered === 'function') ?
		obj.wasAltered() :
		undefined
);

// Arity: 1
export const withMutations = (...args) => (obj) => (
	(obj != null && typeof obj.withMutations === 'function') ?
		obj.withMutations(...args) :
		undefined
);

// Arity: Infinity
export const zip = (...args) => (obj) => (
	(obj != null && typeof obj.zip === 'function') ?
		obj.zip(...args) :
		undefined
);

// Arity: Infinity
export const zipWith = (...args) => (obj) => (
	(obj != null && typeof obj.zipWith === 'function') ?
		obj.zipWith(...args) :
		undefined
);
