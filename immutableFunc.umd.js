(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["immutableFunc"] = factory();
	else
		root["immutableFunc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asImmutable", function() { return asImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMutable", function() { return asMutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "butLast", function() { return butLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheResult", function() { return cacheResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return countBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteIn", function() { return deleteIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entrySeq", function() { return entrySeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNot", function() { return filterNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEntry", function() { return findEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return findKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLast", function() { return findLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastEntry", function() { return findLastEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return findLastIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastKey", function() { return findLastKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMap", function() { return flatMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEntrySeq", function() { return fromEntrySeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return hasIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashCode", function() { return hashCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspect", function() { return inspect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interleave", function() { return interleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpose", function() { return interpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubset", function() { return isSubset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSuperset", function() { return isSuperset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyOf", function() { return keyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keySeq", function() { return keySeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return lastIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastKeyOf", function() { return lastKeyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEntries", function() { return mapEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapKeys", function() { return mapKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return maxBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepIn", function() { return mergeDeepIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWith", function() { return mergeDeepWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeIn", function() { return mergeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return mergeWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return minBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return peek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pop", function() { return pop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushAll", function() { return pushAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return reduceRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIn", function() { return removeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSize", function() { return setSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shift", function() { return shift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipLast", function() { return skipLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipUntil", function() { return skipUntil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splice", function() { return splice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeLast", function() { return takeLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntil", function() { return takeUntil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIndexedSeq", function() { return toIndexedSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toKeyedSeq", function() { return toKeyedSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMap", function() { return toMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return toObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toOrderedMap", function() { return toOrderedMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toOrderedSet", function() { return toOrderedSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSeq", function() { return toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSet", function() { return toSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSetSeq", function() { return toSetSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSource", function() { return toSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStack", function() { return toStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unshift", function() { return unshift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unshiftAll", function() { return unshiftAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIn", function() { return updateIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueSeq", function() { return valueSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wasAltered", function() { return wasAltered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMutations", function() { return withMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipWith", function() { return zipWith; });
// Arity: 1
var add = function add() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return function (obj) {
		return obj != null && typeof obj.add === 'function' ? obj.add.apply(obj, args) : undefined;
	};
};

// Arity: 0
var asImmutable = function asImmutable(obj) {
	return obj != null && typeof obj.asImmutable === 'function' ? obj.asImmutable() : undefined;
};

// Arity: 0
var asMutable = function asMutable(obj) {
	return obj != null && typeof obj.asMutable === 'function' ? obj.asMutable() : undefined;
};

// Arity: 0
var butLast = function butLast(obj) {
	return obj != null && typeof obj.butLast === 'function' ? obj.butLast() : undefined;
};

// Arity: 0
var cacheResult = function cacheResult(obj) {
	return obj != null && typeof obj.cacheResult === 'function' ? obj.cacheResult() : undefined;
};

// Arity: 2
var chain = function chain() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	return function (obj) {
		return obj != null && typeof obj.chain === 'function' ? obj.chain.apply(obj, args) : undefined;
	};
};

// Arity: 0
var clear = function clear(obj) {
	return obj != null && typeof obj.clear === 'function' ? obj.clear() : undefined;
};

// Arity: Infinity
var concat = function concat() {
	for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		args[_key3] = arguments[_key3];
	}

	return function (obj) {
		return obj != null && typeof obj.concat === 'function' ? obj.concat.apply(obj, args) : undefined;
	};
};

// Arity: 1
var contains = function contains() {
	for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		args[_key4] = arguments[_key4];
	}

	return function (obj) {
		return obj != null && typeof obj.contains === 'function' ? obj.contains.apply(obj, args) : undefined;
	};
};

// Arity: 2
var count = function count() {
	for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
		args[_key5] = arguments[_key5];
	}

	return function (obj) {
		return obj != null && typeof obj.count === 'function' ? obj.count.apply(obj, args) : undefined;
	};
};

// Arity: 2
var countBy = function countBy() {
	for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
		args[_key6] = arguments[_key6];
	}

	return function (obj) {
		return obj != null && typeof obj.countBy === 'function' ? obj.countBy.apply(obj, args) : undefined;
	};
};

// Arity: 1
var deleteIn = function deleteIn() {
	for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
		args[_key7] = arguments[_key7];
	}

	return function (obj) {
		return obj != null && typeof obj.deleteIn === 'function' ? obj.deleteIn.apply(obj, args) : undefined;
	};
};

// Arity: 0
var entries = function entries(obj) {
	return obj != null && typeof obj.entries === 'function' ? obj.entries() : undefined;
};

// Arity: 0
var entrySeq = function entrySeq(obj) {
	return obj != null && typeof obj.entrySeq === 'function' ? obj.entrySeq() : undefined;
};

// Arity: 1
var equals = function equals() {
	for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
		args[_key8] = arguments[_key8];
	}

	return function (obj) {
		return obj != null && typeof obj.equals === 'function' ? obj.equals.apply(obj, args) : undefined;
	};
};

// Arity: 2
var every = function every() {
	for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
		args[_key9] = arguments[_key9];
	}

	return function (obj) {
		return obj != null && typeof obj.every === 'function' ? obj.every.apply(obj, args) : undefined;
	};
};

// Arity: 2
var filter = function filter() {
	for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
		args[_key10] = arguments[_key10];
	}

	return function (obj) {
		return obj != null && typeof obj.filter === 'function' ? obj.filter.apply(obj, args) : undefined;
	};
};

// Arity: 2
var filterNot = function filterNot() {
	for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
		args[_key11] = arguments[_key11];
	}

	return function (obj) {
		return obj != null && typeof obj.filterNot === 'function' ? obj.filterNot.apply(obj, args) : undefined;
	};
};

// Arity: 3
var find = function find() {
	for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
		args[_key12] = arguments[_key12];
	}

	return function (obj) {
		return obj != null && typeof obj.find === 'function' ? obj.find.apply(obj, args) : undefined;
	};
};

// Arity: 3
var findEntry = function findEntry() {
	for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
		args[_key13] = arguments[_key13];
	}

	return function (obj) {
		return obj != null && typeof obj.findEntry === 'function' ? obj.findEntry.apply(obj, args) : undefined;
	};
};

// Arity: 2
var findIndex = function findIndex() {
	for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
		args[_key14] = arguments[_key14];
	}

	return function (obj) {
		return obj != null && typeof obj.findIndex === 'function' ? obj.findIndex.apply(obj, args) : undefined;
	};
};

// Arity: 2
var findKey = function findKey() {
	for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
		args[_key15] = arguments[_key15];
	}

	return function (obj) {
		return obj != null && typeof obj.findKey === 'function' ? obj.findKey.apply(obj, args) : undefined;
	};
};

// Arity: 3
var findLast = function findLast() {
	for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
		args[_key16] = arguments[_key16];
	}

	return function (obj) {
		return obj != null && typeof obj.findLast === 'function' ? obj.findLast.apply(obj, args) : undefined;
	};
};

// Arity: 3
var findLastEntry = function findLastEntry() {
	for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
		args[_key17] = arguments[_key17];
	}

	return function (obj) {
		return obj != null && typeof obj.findLastEntry === 'function' ? obj.findLastEntry.apply(obj, args) : undefined;
	};
};

// Arity: 2
var findLastIndex = function findLastIndex() {
	for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
		args[_key18] = arguments[_key18];
	}

	return function (obj) {
		return obj != null && typeof obj.findLastIndex === 'function' ? obj.findLastIndex.apply(obj, args) : undefined;
	};
};

// Arity: 2
var findLastKey = function findLastKey() {
	for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
		args[_key19] = arguments[_key19];
	}

	return function (obj) {
		return obj != null && typeof obj.findLastKey === 'function' ? obj.findLastKey.apply(obj, args) : undefined;
	};
};

// Arity: 0
var first = function first(obj) {
	return obj != null && typeof obj.first === 'function' ? obj.first() : undefined;
};

// Arity: 2
var flatMap = function flatMap() {
	for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
		args[_key20] = arguments[_key20];
	}

	return function (obj) {
		return obj != null && typeof obj.flatMap === 'function' ? obj.flatMap.apply(obj, args) : undefined;
	};
};

// Arity: 1
var flatten = function flatten() {
	for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
		args[_key21] = arguments[_key21];
	}

	return function (obj) {
		return obj != null && typeof obj.flatten === 'function' ? obj.flatten.apply(obj, args) : undefined;
	};
};

// Arity: 0
var flip = function flip(obj) {
	return obj != null && typeof obj.flip === 'function' ? obj.flip() : undefined;
};

// Arity: 2
var forEach = function forEach() {
	for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
		args[_key22] = arguments[_key22];
	}

	return function (obj) {
		return obj != null && typeof obj.forEach === 'function' ? obj.forEach.apply(obj, args) : undefined;
	};
};

// Arity: 0
var fromEntrySeq = function fromEntrySeq(obj) {
	return obj != null && typeof obj.fromEntrySeq === 'function' ? obj.fromEntrySeq() : undefined;
};

// Arity: 2
var get = function get() {
	for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
		args[_key23] = arguments[_key23];
	}

	return function (obj) {
		return obj != null && typeof obj.get === 'function' ? obj.get.apply(obj, args) : undefined;
	};
};

// Arity: 2
var getIn = function getIn() {
	for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
		args[_key24] = arguments[_key24];
	}

	return function (obj) {
		return obj != null && typeof obj.getIn === 'function' ? obj.getIn.apply(obj, args) : undefined;
	};
};

// Arity: 2
var groupBy = function groupBy() {
	for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
		args[_key25] = arguments[_key25];
	}

	return function (obj) {
		return obj != null && typeof obj.groupBy === 'function' ? obj.groupBy.apply(obj, args) : undefined;
	};
};

// Arity: 1
var has = function has() {
	for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
		args[_key26] = arguments[_key26];
	}

	return function (obj) {
		return obj != null && typeof obj.has === 'function' ? obj.has.apply(obj, args) : undefined;
	};
};

// Arity: 1
var hasIn = function hasIn() {
	for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
		args[_key27] = arguments[_key27];
	}

	return function (obj) {
		return obj != null && typeof obj.hasIn === 'function' ? obj.hasIn.apply(obj, args) : undefined;
	};
};

// Arity: 0
var hashCode = function hashCode(obj) {
	return obj != null && typeof obj.hashCode === 'function' ? obj.hashCode() : undefined;
};

// Arity: 1
var includes = function includes() {
	for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
		args[_key28] = arguments[_key28];
	}

	return function (obj) {
		return obj != null && typeof obj.includes === 'function' ? obj.includes.apply(obj, args) : undefined;
	};
};

// Arity: 1
var indexOf = function indexOf() {
	for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
		args[_key29] = arguments[_key29];
	}

	return function (obj) {
		return obj != null && typeof obj.indexOf === 'function' ? obj.indexOf.apply(obj, args) : undefined;
	};
};

// Arity: 2
var insert = function insert() {
	for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
		args[_key30] = arguments[_key30];
	}

	return function (obj) {
		return obj != null && typeof obj.insert === 'function' ? obj.insert.apply(obj, args) : undefined;
	};
};

// Arity: 0
var inspect = function inspect(obj) {
	return obj != null && typeof obj.inspect === 'function' ? obj.inspect() : undefined;
};

// Arity: Infinity
var interleave = function interleave() {
	for (var _len31 = arguments.length, args = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
		args[_key31] = arguments[_key31];
	}

	return function (obj) {
		return obj != null && typeof obj.interleave === 'function' ? obj.interleave.apply(obj, args) : undefined;
	};
};

// Arity: 1
var interpose = function interpose() {
	for (var _len32 = arguments.length, args = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
		args[_key32] = arguments[_key32];
	}

	return function (obj) {
		return obj != null && typeof obj.interpose === 'function' ? obj.interpose.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var intersect = function intersect() {
	for (var _len33 = arguments.length, args = Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
		args[_key33] = arguments[_key33];
	}

	return function (obj) {
		return obj != null && typeof obj.intersect === 'function' ? obj.intersect.apply(obj, args) : undefined;
	};
};

// Arity: 0
var isEmpty = function isEmpty(obj) {
	return obj != null && typeof obj.isEmpty === 'function' ? obj.isEmpty() : undefined;
};

// Arity: 1
var isSubset = function isSubset() {
	for (var _len34 = arguments.length, args = Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
		args[_key34] = arguments[_key34];
	}

	return function (obj) {
		return obj != null && typeof obj.isSubset === 'function' ? obj.isSubset.apply(obj, args) : undefined;
	};
};

// Arity: 1
var isSuperset = function isSuperset() {
	for (var _len35 = arguments.length, args = Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
		args[_key35] = arguments[_key35];
	}

	return function (obj) {
		return obj != null && typeof obj.isSuperset === 'function' ? obj.isSuperset.apply(obj, args) : undefined;
	};
};

// Arity: 1
var join = function join() {
	for (var _len36 = arguments.length, args = Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
		args[_key36] = arguments[_key36];
	}

	return function (obj) {
		return obj != null && typeof obj.join === 'function' ? obj.join.apply(obj, args) : undefined;
	};
};

// Arity: 1
var keyOf = function keyOf() {
	for (var _len37 = arguments.length, args = Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
		args[_key37] = arguments[_key37];
	}

	return function (obj) {
		return obj != null && typeof obj.keyOf === 'function' ? obj.keyOf.apply(obj, args) : undefined;
	};
};

// Arity: 0
var keySeq = function keySeq(obj) {
	return obj != null && typeof obj.keySeq === 'function' ? obj.keySeq() : undefined;
};

// Arity: 0
var keys = function keys(obj) {
	return obj != null && typeof obj.keys === 'function' ? obj.keys() : undefined;
};

// Arity: 0
var last = function last(obj) {
	return obj != null && typeof obj.last === 'function' ? obj.last() : undefined;
};

// Arity: 1
var lastIndexOf = function lastIndexOf() {
	for (var _len38 = arguments.length, args = Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
		args[_key38] = arguments[_key38];
	}

	return function (obj) {
		return obj != null && typeof obj.lastIndexOf === 'function' ? obj.lastIndexOf.apply(obj, args) : undefined;
	};
};

// Arity: 1
var lastKeyOf = function lastKeyOf() {
	for (var _len39 = arguments.length, args = Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
		args[_key39] = arguments[_key39];
	}

	return function (obj) {
		return obj != null && typeof obj.lastKeyOf === 'function' ? obj.lastKeyOf.apply(obj, args) : undefined;
	};
};

// Arity: 2
var map = function map() {
	for (var _len40 = arguments.length, args = Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
		args[_key40] = arguments[_key40];
	}

	return function (obj) {
		return obj != null && typeof obj.map === 'function' ? obj.map.apply(obj, args) : undefined;
	};
};

// Arity: 2
var mapEntries = function mapEntries() {
	for (var _len41 = arguments.length, args = Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
		args[_key41] = arguments[_key41];
	}

	return function (obj) {
		return obj != null && typeof obj.mapEntries === 'function' ? obj.mapEntries.apply(obj, args) : undefined;
	};
};

// Arity: 2
var mapKeys = function mapKeys() {
	for (var _len42 = arguments.length, args = Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
		args[_key42] = arguments[_key42];
	}

	return function (obj) {
		return obj != null && typeof obj.mapKeys === 'function' ? obj.mapKeys.apply(obj, args) : undefined;
	};
};

// Arity: 1
var max = function max() {
	for (var _len43 = arguments.length, args = Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
		args[_key43] = arguments[_key43];
	}

	return function (obj) {
		return obj != null && typeof obj.max === 'function' ? obj.max.apply(obj, args) : undefined;
	};
};

// Arity: 2
var maxBy = function maxBy() {
	for (var _len44 = arguments.length, args = Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
		args[_key44] = arguments[_key44];
	}

	return function (obj) {
		return obj != null && typeof obj.maxBy === 'function' ? obj.maxBy.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var merge = function merge() {
	for (var _len45 = arguments.length, args = Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
		args[_key45] = arguments[_key45];
	}

	return function (obj) {
		return obj != null && typeof obj.merge === 'function' ? obj.merge.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var mergeDeep = function mergeDeep() {
	for (var _len46 = arguments.length, args = Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
		args[_key46] = arguments[_key46];
	}

	return function (obj) {
		return obj != null && typeof obj.mergeDeep === 'function' ? obj.mergeDeep.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var mergeDeepIn = function mergeDeepIn() {
	for (var _len47 = arguments.length, args = Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
		args[_key47] = arguments[_key47];
	}

	return function (obj) {
		return obj != null && typeof obj.mergeDeepIn === 'function' ? obj.mergeDeepIn.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var mergeDeepWith = function mergeDeepWith() {
	for (var _len48 = arguments.length, args = Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
		args[_key48] = arguments[_key48];
	}

	return function (obj) {
		return obj != null && typeof obj.mergeDeepWith === 'function' ? obj.mergeDeepWith.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var mergeIn = function mergeIn() {
	for (var _len49 = arguments.length, args = Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
		args[_key49] = arguments[_key49];
	}

	return function (obj) {
		return obj != null && typeof obj.mergeIn === 'function' ? obj.mergeIn.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var mergeWith = function mergeWith() {
	for (var _len50 = arguments.length, args = Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
		args[_key50] = arguments[_key50];
	}

	return function (obj) {
		return obj != null && typeof obj.mergeWith === 'function' ? obj.mergeWith.apply(obj, args) : undefined;
	};
};

// Arity: 1
var min = function min() {
	for (var _len51 = arguments.length, args = Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
		args[_key51] = arguments[_key51];
	}

	return function (obj) {
		return obj != null && typeof obj.min === 'function' ? obj.min.apply(obj, args) : undefined;
	};
};

// Arity: 2
var minBy = function minBy() {
	for (var _len52 = arguments.length, args = Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
		args[_key52] = arguments[_key52];
	}

	return function (obj) {
		return obj != null && typeof obj.minBy === 'function' ? obj.minBy.apply(obj, args) : undefined;
	};
};

// Arity: 0
var peek = function peek(obj) {
	return obj != null && typeof obj.peek === 'function' ? obj.peek() : undefined;
};

// Arity: 0
var pop = function pop(obj) {
	return obj != null && typeof obj.pop === 'function' ? obj.pop() : undefined;
};

// Arity: Infinity
var push = function push() {
	for (var _len53 = arguments.length, args = Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
		args[_key53] = arguments[_key53];
	}

	return function (obj) {
		return obj != null && typeof obj.push === 'function' ? obj.push.apply(obj, args) : undefined;
	};
};

// Arity: 1
var pushAll = function pushAll() {
	for (var _len54 = arguments.length, args = Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
		args[_key54] = arguments[_key54];
	}

	return function (obj) {
		return obj != null && typeof obj.pushAll === 'function' ? obj.pushAll.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var reduce = function reduce() {
	for (var _len55 = arguments.length, args = Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
		args[_key55] = arguments[_key55];
	}

	return function (obj) {
		return obj != null && typeof obj.reduce === 'function' ? obj.reduce.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var reduceRight = function reduceRight() {
	for (var _len56 = arguments.length, args = Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
		args[_key56] = arguments[_key56];
	}

	return function (obj) {
		return obj != null && typeof obj.reduceRight === 'function' ? obj.reduceRight.apply(obj, args) : undefined;
	};
};

// Arity: 1
var remove = function remove() {
	for (var _len57 = arguments.length, args = Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
		args[_key57] = arguments[_key57];
	}

	return function (obj) {
		return obj != null && typeof obj.remove === 'function' ? obj.remove.apply(obj, args) : undefined;
	};
};

// Arity: 1
var removeIn = function removeIn() {
	for (var _len58 = arguments.length, args = Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
		args[_key58] = arguments[_key58];
	}

	return function (obj) {
		return obj != null && typeof obj.removeIn === 'function' ? obj.removeIn.apply(obj, args) : undefined;
	};
};

// Arity: 0
var rest = function rest(obj) {
	return obj != null && typeof obj.rest === 'function' ? obj.rest() : undefined;
};

// Arity: 0
var reverse = function reverse(obj) {
	return obj != null && typeof obj.reverse === 'function' ? obj.reverse() : undefined;
};

// Arity: 2
var set = function set() {
	for (var _len59 = arguments.length, args = Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
		args[_key59] = arguments[_key59];
	}

	return function (obj) {
		return obj != null && typeof obj.set === 'function' ? obj.set.apply(obj, args) : undefined;
	};
};

// Arity: 2
var setIn = function setIn() {
	for (var _len60 = arguments.length, args = Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {
		args[_key60] = arguments[_key60];
	}

	return function (obj) {
		return obj != null && typeof obj.setIn === 'function' ? obj.setIn.apply(obj, args) : undefined;
	};
};

// Arity: 1
var setSize = function setSize() {
	for (var _len61 = arguments.length, args = Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {
		args[_key61] = arguments[_key61];
	}

	return function (obj) {
		return obj != null && typeof obj.setSize === 'function' ? obj.setSize.apply(obj, args) : undefined;
	};
};

// Arity: 0
var shift = function shift(obj) {
	return obj != null && typeof obj.shift === 'function' ? obj.shift() : undefined;
};

// Arity: 1
var skip = function skip() {
	for (var _len62 = arguments.length, args = Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {
		args[_key62] = arguments[_key62];
	}

	return function (obj) {
		return obj != null && typeof obj.skip === 'function' ? obj.skip.apply(obj, args) : undefined;
	};
};

// Arity: 1
var skipLast = function skipLast() {
	for (var _len63 = arguments.length, args = Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {
		args[_key63] = arguments[_key63];
	}

	return function (obj) {
		return obj != null && typeof obj.skipLast === 'function' ? obj.skipLast.apply(obj, args) : undefined;
	};
};

// Arity: 2
var skipUntil = function skipUntil() {
	for (var _len64 = arguments.length, args = Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {
		args[_key64] = arguments[_key64];
	}

	return function (obj) {
		return obj != null && typeof obj.skipUntil === 'function' ? obj.skipUntil.apply(obj, args) : undefined;
	};
};

// Arity: 2
var skipWhile = function skipWhile() {
	for (var _len65 = arguments.length, args = Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {
		args[_key65] = arguments[_key65];
	}

	return function (obj) {
		return obj != null && typeof obj.skipWhile === 'function' ? obj.skipWhile.apply(obj, args) : undefined;
	};
};

// Arity: 2
var slice = function slice() {
	for (var _len66 = arguments.length, args = Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {
		args[_key66] = arguments[_key66];
	}

	return function (obj) {
		return obj != null && typeof obj.slice === 'function' ? obj.slice.apply(obj, args) : undefined;
	};
};

// Arity: 2
var some = function some() {
	for (var _len67 = arguments.length, args = Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {
		args[_key67] = arguments[_key67];
	}

	return function (obj) {
		return obj != null && typeof obj.some === 'function' ? obj.some.apply(obj, args) : undefined;
	};
};

// Arity: 1
var sort = function sort() {
	for (var _len68 = arguments.length, args = Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {
		args[_key68] = arguments[_key68];
	}

	return function (obj) {
		return obj != null && typeof obj.sort === 'function' ? obj.sort.apply(obj, args) : undefined;
	};
};

// Arity: 2
var sortBy = function sortBy() {
	for (var _len69 = arguments.length, args = Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {
		args[_key69] = arguments[_key69];
	}

	return function (obj) {
		return obj != null && typeof obj.sortBy === 'function' ? obj.sortBy.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var splice = function splice() {
	for (var _len70 = arguments.length, args = Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {
		args[_key70] = arguments[_key70];
	}

	return function (obj) {
		return obj != null && typeof obj.splice === 'function' ? obj.splice.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var subtract = function subtract() {
	for (var _len71 = arguments.length, args = Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {
		args[_key71] = arguments[_key71];
	}

	return function (obj) {
		return obj != null && typeof obj.subtract === 'function' ? obj.subtract.apply(obj, args) : undefined;
	};
};

// Arity: 1
var take = function take() {
	for (var _len72 = arguments.length, args = Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {
		args[_key72] = arguments[_key72];
	}

	return function (obj) {
		return obj != null && typeof obj.take === 'function' ? obj.take.apply(obj, args) : undefined;
	};
};

// Arity: 1
var takeLast = function takeLast() {
	for (var _len73 = arguments.length, args = Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {
		args[_key73] = arguments[_key73];
	}

	return function (obj) {
		return obj != null && typeof obj.takeLast === 'function' ? obj.takeLast.apply(obj, args) : undefined;
	};
};

// Arity: 2
var takeUntil = function takeUntil() {
	for (var _len74 = arguments.length, args = Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {
		args[_key74] = arguments[_key74];
	}

	return function (obj) {
		return obj != null && typeof obj.takeUntil === 'function' ? obj.takeUntil.apply(obj, args) : undefined;
	};
};

// Arity: 2
var takeWhile = function takeWhile() {
	for (var _len75 = arguments.length, args = Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {
		args[_key75] = arguments[_key75];
	}

	return function (obj) {
		return obj != null && typeof obj.takeWhile === 'function' ? obj.takeWhile.apply(obj, args) : undefined;
	};
};

// Arity: 0
var toArray = function toArray(obj) {
	return obj != null && typeof obj.toArray === 'function' ? obj.toArray() : undefined;
};

// Arity: 0
var toIndexedSeq = function toIndexedSeq(obj) {
	return obj != null && typeof obj.toIndexedSeq === 'function' ? obj.toIndexedSeq() : undefined;
};

// Arity: 0
var toJS = function toJS(obj) {
	return obj != null && typeof obj.toJS === 'function' ? obj.toJS() : undefined;
};

// Arity: 0
var toJSON = function toJSON(obj) {
	return obj != null && typeof obj.toJSON === 'function' ? obj.toJSON() : undefined;
};

// Arity: 0
var toKeyedSeq = function toKeyedSeq(obj) {
	return obj != null && typeof obj.toKeyedSeq === 'function' ? obj.toKeyedSeq() : undefined;
};

// Arity: 0
var toList = function toList(obj) {
	return obj != null && typeof obj.toList === 'function' ? obj.toList() : undefined;
};

// Arity: 0
var toMap = function toMap(obj) {
	return obj != null && typeof obj.toMap === 'function' ? obj.toMap() : undefined;
};

// Arity: 0
var toObject = function toObject(obj) {
	return obj != null && typeof obj.toObject === 'function' ? obj.toObject() : undefined;
};

// Arity: 0
var toOrderedMap = function toOrderedMap(obj) {
	return obj != null && typeof obj.toOrderedMap === 'function' ? obj.toOrderedMap() : undefined;
};

// Arity: 0
var toOrderedSet = function toOrderedSet(obj) {
	return obj != null && typeof obj.toOrderedSet === 'function' ? obj.toOrderedSet() : undefined;
};

// Arity: 0
var toSeq = function toSeq(obj) {
	return obj != null && typeof obj.toSeq === 'function' ? obj.toSeq() : undefined;
};

// Arity: 0
var toSet = function toSet(obj) {
	return obj != null && typeof obj.toSet === 'function' ? obj.toSet() : undefined;
};

// Arity: 0
var toSetSeq = function toSetSeq(obj) {
	return obj != null && typeof obj.toSetSeq === 'function' ? obj.toSetSeq() : undefined;
};

// Arity: 0
var toSource = function toSource(obj) {
	return obj != null && typeof obj.toSource === 'function' ? obj.toSource() : undefined;
};

// Arity: 0
var toStack = function toStack(obj) {
	return obj != null && typeof obj.toStack === 'function' ? obj.toStack() : undefined;
};

// Arity: 0
var toString = function toString(obj) {
	return obj != null && typeof obj.toString === 'function' ? obj.toString() : undefined;
};

// Arity: Infinity
var union = function union() {
	for (var _len76 = arguments.length, args = Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {
		args[_key76] = arguments[_key76];
	}

	return function (obj) {
		return obj != null && typeof obj.union === 'function' ? obj.union.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var unshift = function unshift() {
	for (var _len77 = arguments.length, args = Array(_len77), _key77 = 0; _key77 < _len77; _key77++) {
		args[_key77] = arguments[_key77];
	}

	return function (obj) {
		return obj != null && typeof obj.unshift === 'function' ? obj.unshift.apply(obj, args) : undefined;
	};
};

// Arity: 1
var unshiftAll = function unshiftAll() {
	for (var _len78 = arguments.length, args = Array(_len78), _key78 = 0; _key78 < _len78; _key78++) {
		args[_key78] = arguments[_key78];
	}

	return function (obj) {
		return obj != null && typeof obj.unshiftAll === 'function' ? obj.unshiftAll.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var update = function update() {
	for (var _len79 = arguments.length, args = Array(_len79), _key79 = 0; _key79 < _len79; _key79++) {
		args[_key79] = arguments[_key79];
	}

	return function (obj) {
		return obj != null && typeof obj.update === 'function' ? obj.update.apply(obj, args) : undefined;
	};
};

// Arity: 3
var updateIn = function updateIn() {
	for (var _len80 = arguments.length, args = Array(_len80), _key80 = 0; _key80 < _len80; _key80++) {
		args[_key80] = arguments[_key80];
	}

	return function (obj) {
		return obj != null && typeof obj.updateIn === 'function' ? obj.updateIn.apply(obj, args) : undefined;
	};
};

// Arity: 0
var valueSeq = function valueSeq(obj) {
	return obj != null && typeof obj.valueSeq === 'function' ? obj.valueSeq() : undefined;
};

// Arity: 0
var values = function values(obj) {
	return obj != null && typeof obj.values === 'function' ? obj.values() : undefined;
};

// Arity: 0
var wasAltered = function wasAltered(obj) {
	return obj != null && typeof obj.wasAltered === 'function' ? obj.wasAltered() : undefined;
};

// Arity: 1
var withMutations = function withMutations() {
	for (var _len81 = arguments.length, args = Array(_len81), _key81 = 0; _key81 < _len81; _key81++) {
		args[_key81] = arguments[_key81];
	}

	return function (obj) {
		return obj != null && typeof obj.withMutations === 'function' ? obj.withMutations.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var zip = function zip() {
	for (var _len82 = arguments.length, args = Array(_len82), _key82 = 0; _key82 < _len82; _key82++) {
		args[_key82] = arguments[_key82];
	}

	return function (obj) {
		return obj != null && typeof obj.zip === 'function' ? obj.zip.apply(obj, args) : undefined;
	};
};

// Arity: Infinity
var zipWith = function zipWith() {
	for (var _len83 = arguments.length, args = Array(_len83), _key83 = 0; _key83 < _len83; _key83++) {
		args[_key83] = arguments[_key83];
	}

	return function (obj) {
		return obj != null && typeof obj.zipWith === 'function' ? obj.zipWith.apply(obj, args) : undefined;
	};
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=immutableFunc.umd.js.map