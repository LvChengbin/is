/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 03/31/2020
 * Description:
 ******************************************************************/
import isArguments from './arguments';
import isArray from './array';
import isArrayBuffer from './array-buffer';
import isArrayBufferView from './array-buffer-view';
import isArrowFunction from './arrow-function';
import isAsyncFunction from './async-function';
import isBetween from './between';
import isBlob from './blob';
import isBoolean from './boolean';
import isClass from './class';
import isDarkMode from './dark-mode';
import isDataview from './dataview';
import isDate from './date';
import isElementNode from './element-node';
import isEmail from './email';
import isError from './error';
import isFormdata from './formdata';
import isFragmentNode from './fragment-node';
import isFunction from './function';
import isGeneralizedFalse from './generalized-false';
import isGeneralizedTrue from './generalized-true';
import isGenerator from './generator';
import isInteger from './integer';
import isIP from './ip';
import isIPv4 from './ipv4';
import isIPv6 from './ipv6';
import isIterable from './iterable';
import isLeapYear from './leap-year';
import isNode from './node';
import isNumber from './number';
import isObject from './object';
import isOneDimensionalArray from './one-dimensional-array';
import isPlainObject from './plain-object';
import isPrivateIPv4 from './private-ipv4';
import isPromise from './promise';
import isRegexp from './regexp';
import isSet from './set';
import isString from './string';
import isTextNode from './text-node';
import isUndefined from './undefined';
import isUrl from './url';
import isWindow from './window';
export { isArguments, isArray, isArrayBuffer, isArrayBufferView, isArrowFunction, isAsyncFunction, isBetween, isBlob, isBoolean, isClass, isDarkMode, isDataview, isDate, isElementNode, isEmail, isError, isFormdata, isFragmentNode, isFunction, isGeneralizedFalse, isGeneralizedTrue, isGenerator, isInteger, isIP, isIPv4, isIPv6, isIterable, isLeapYear, isNode, isNumber, isObject, isOneDimensionalArray, isPlainObject, isPrivateIPv4, isPromise, isRegexp, isSet, isString, isTextNode, isUndefined, isUrl, isWindow };
declare const is: {
<<<<<<< HEAD
    [key: string]: (x: any, ...args: any[]) => boolean;
=======
    [key: string]: (x: unknown, ...args: any[]) => boolean;
>>>>>>> x
};
export default is;
