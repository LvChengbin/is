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
import isFunction from './function';
import isInteger from './integer';
import isIP from './ip';
import isIPv4 from './ipv4';
import isIPv6 from './ipv6';
import isLeapYear from './leap-year';
import isNode from './node';
import isNumber from './number';
import isObject from './object';
import isPlainObject from './plain-object';
import isPrivateIPv4 from './private-ipv4';
import isPromise from './promise';
import isRegexp from './regexp';
import isString from './string';
import isTextNode from './text-node';
import isUndefined from './undefined';
import isUrl from './url';
import isWindow from './window';
export { isArguments, isArrayBufferView, isArrayBuffer, isArray, isArrowFunction, isAsyncFunction, isBetween, isBlob, isBoolean, isClass, isDarkMode, isDataview, isDate, isElementNode, isEmail, isFunction, isNumber, isInteger, isIP, isIPv4, isIPv6, isLeapYear, isNode, isObject, isPlainObject, isPrivateIPv4, isPromise, isRegexp, isString, isTextNode, isUndefined, isUrl, isWindow };
declare const is: {
    [key: string]: (x: any, ...args: any[]) => boolean;
};
export default is;
