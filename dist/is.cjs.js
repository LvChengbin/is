'use strict';

var isArguments = obj => ({}).toString.call( obj ) === '[object Arguments]';

var isArray = obj => Array.isArray( obj );

var isAsyncFunction = fn => ( {} ).toString.call( fn ) === '[object AsyncFunction]';

var isFunction = fn => ({}).toString.call( fn ).toLowerCase() === '[object function]' || isAsyncFunction;

var isArrowFunction = fn => {
    if( !isFunction( fn ) ) return false;
    return /^(?:function)?\s*\(?[\w\s,]*\)?\s*=>/.test( fn.toString() );
};

var isBoolean = s => typeof s === 'boolean';

var isDate = date => ({}).toString.call( date ) === '[object Date]';

var isEmail = str => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test( str );

var isString = str => typeof str === 'string' || s instanceof String;

var isObject = obj => ({}).toString.call( obj ) === '[object Object]';

var isEmpty = obj => {
    if( isArray( obj ) || isString( obj ) ) {
        return !obj.length;
    }
    if( isObject( obj ) ) {
        return !Object.keys( obj ).length;
    }
    return true;
};

var isError = e => ({}).toString.call( e ) === '[object Error]';

var isFalse = ( obj, generalized = true ) => {
    if( isBoolean( obj ) || !generalized ) return !obj;
    if( isString( obj ) ) {
        return [ 'false', 'no', '0', '', 'nay', 'n', 'disagree' ].indexOf( obj.toLowerCase() ) > -1;
    }
    return !obj;
};

var isNumber = ( n, strict = false ) => {
    if( ({}).toString.call( n ).toLowerCase() === '[object number]' ) {
        return true;
    }
    if( strict ) return false;
    return !isNaN( n ) && !/\.$/.test( n );
};

var isInteger = ( n, strict = false ) => {
    if( isNumber( n ) ) {
        return n % 1 === 0;
    }

    if( strict ) return false;

    if( isString( n ) ) {
        return String( parseInt( n ) ) === n;
    }

    return false;
}

const support = ( () => {
    try {
        return !!Symbol.iterator;
    } catch( e ) {
        return false;
    }
} )();

var isIterable = obj => {
    if( !obj || !support ) return false;
    return isFunction( obj[ Symbol.iterator ] );
};

var isRegExp = reg => ({}).toString.call( reg ) === '[object RegExp]';

var isTrue = ( obj, generalized = true ) => {
    if( isBoolean( obj ) || !generalized ) return !!obj;
    if( isString( obj ) ) {
        return [ 'true', 'yes', 'ok', '1', 'yea', 'yep', 'y', 'agree' ].indexOf( obj.toLowerCase() ) > -1;
    }
    return !!obj;
};

var isUndefined = u => typeof u === 'undefined';

var isUrl = url => {
    if( !isString( url ) ) return false;
    if( !/^(https?|ftp):\/\//i.test( url ) ) return false;
    const a = document.createElement( 'a' );
    a.href = url;
    return /^(https?|ftp):/i.test( a.protocol );
};

var is = {
    arguments : isArguments,
    array : isArray,
    arrowFunction : isArrowFunction,
    asyncFunction : isAsyncFunction,
    boolean : isBoolean,
    date : isDate,
    email : isEmail,
    empty : isEmpty,
    error : isError,
    false : isFalse,
    function : isFunction,
    integer : isInteger,
    iterable : isIterable,
    number : isNumber,
    object : isObject,
    regexp : isRegExp,
    string : isString,
    true : isTrue,
    undefined : isUndefined,
    url : isUrl
};

module.exports = is;
