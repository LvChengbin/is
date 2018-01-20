(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.IS = factory());
}(this, (function () { 'use strict';

var isArguments = (function (obj) {
  return {}.toString.call(obj) === '[object Arguments]';
});

var isArray = (function (obj) {
  return Array.isArray(obj);
});

var isAsyncFunction = (function (fn) {
  return {}.toString.call(fn) === '[object AsyncFunction]';
});

var isFunction = (function (fn) {
  return {}.toString.call(fn) === '[object Function]' || isAsyncFunction(fn);
});

var arrowFunction = (function (fn) {
    if (!isFunction(fn)) return false;
    return (/^(?:function)?\s*\(?[\w\s,]*\)?\s*=>/.test(fn.toString())
    );
});

var isBoolean = (function (s) {
  return typeof s === 'boolean';
});

var date = (function (date) {
  return {}.toString.call(date) === '[object Date]';
});

var email = (function (str) {
  return (/^(([^#$%&*!+-/=?^`{|}~<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(str)
  );
});

var isString = (function (str) {
  return typeof str === 'string' || str instanceof String;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isObject = (function (obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
});

var empty = (function (obj) {
    if (isArray(obj) || isString(obj)) {
        return !obj.length;
    }
    if (isObject(obj)) {
        return !Object.keys(obj).length;
    }
    return !obj;
});

var error = (function (e) {
  return {}.toString.call(e) === '[object Error]';
});

var isFalse = (function (obj) {
    var generalized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (isBoolean(obj) || !generalized) return !obj;
    if (isString(obj)) {
        return ['false', 'no', '0', '', 'nay', 'n', 'disagree'].indexOf(obj.toLowerCase()) > -1;
    }
    return !obj;
});

var isNumber = (function (n) {
    var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if ({}.toString.call(n).toLowerCase() === '[object number]') {
        return true;
    }
    if (strict) return false;
    return !isNaN(n) && !/\.$/.test(n);
});

var integer = (function (n) {
    var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    if (isNumber(n, true)) return n % 1 === 0;

    if (strict) return false;

    if (isString(n)) {
        if (n === '-0') return true;
        return n.indexOf('.') < 0 && String(parseInt(n)) === n;
    }

    return false;
});

var iterable = (function (obj) {
    try {
        return isFunction(obj[Symbol.iterator]);
    } catch (e) {
        return false;
    }
});

var promise = (function (p) {
  return p && isFunction(p.then);
});

var regexp = (function (reg) {
  return {}.toString.call(reg) === '[object RegExp]';
});

var isTrue = (function (obj) {
    var generalized = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (isBoolean(obj) || !generalized) return !!obj;
    if (isString(obj)) {
        return ['true', 'yes', 'ok', '1', 'yea', 'yep', 'y', 'agree'].indexOf(obj.toLowerCase()) > -1;
    }
    return !!obj;
});

function isUndefined () {
    return arguments.length > 0 && typeof arguments[0] === 'undefined';
}

var url = (function (url) {
    if (!isString(url)) return false;
    if (!/^(https?|ftp):\/\//i.test(url)) return false;
    var a = document.createElement('a');
    a.href = url;
    return (/^(https?|ftp):/i.test(a.protocol)
    );
});

var node = (function (s) {
  return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? s instanceof Node : s && (typeof s === 'undefined' ? 'undefined' : _typeof(s)) === 'object' && typeof s.nodeType === 'number' && typeof s.nodeName === 'string';
});

var is = {
    arguments: isArguments,
    array: isArray,
    arrowFunction: arrowFunction,
    asyncFunction: isAsyncFunction,
    boolean: isBoolean,
    date: date,
    email: email,
    empty: empty,
    error: error,
    false: isFalse,
    function: isFunction,
    integer: integer,
    iterable: iterable,
    number: isNumber,
    object: isObject,
    promise: promise,
    regexp: regexp,
    string: isString,
    true: isTrue,
    undefined: isUndefined,
    url: url,
    node: node
};

return is;

})));
