import array from './array';
import arrowFunction from './arrow-function';
import asyncFunction from './async-function';
import between from './between';
import date from './date';
import elementNode from './element-node';
import email from './email';
import empty from './empty';
import error from './error';
import fragmentNode from './fragment-node';
import generator from './generator';
import integer from './integer';
import ip from './ip';
import ipv4 from './ipv4';
import ipv6 from './ipv6';
import isArguments from './arguments';
import isBoolean from './boolean';
import isClass from './class';
import isFalse from './false';
import isFunctoin from './function';
import isMap from './map';
import isSet from './set';
import isTrue from './true';
import isUndefined from './undefined';
import isWindow from './window';
import iterable from './iterable';
import leapYear from './leap-year';
import node from './node';
import number from './number';
import object from './object';
import oneDimensionalArray from './one-dimensional-array';
import plainObject from './plain-object';
import privateIPv4 from './private-ipv4';
import promise from './promise';
import regexp from './regexp';
import string from './string';
import textNode from './text-node';
import url from './url';

export default {
    arguments : isArguments,
    array,
    arrowFunction,
    asyncFunction,
    between : between,
    boolean : isBoolean,
    class : isClass,
    date,
    elementNode,
    email,
    empty,
    error,
    false : isFalse,
    fragmentNode,
    function : isFunctoin,
    generator,
    integer,
    ip,
    ipv4,
    ipv6,
    iterable,
    leapYear : leapYear,
    map : isMap,
    node,
    number,
    object,
    oneDimensionalArray,
    plainObject,
    privateIPv4,
    promise,
    regexp,
    set : isSet,
    string,
    textNode,
    true : isTrue,
    undefined : isUndefined,
    url,
    window : isWindow
};
