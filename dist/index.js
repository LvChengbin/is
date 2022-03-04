"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 03/31/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWindow = exports.isUrl = exports.isUndefined = exports.isTextNode = exports.isString = exports.isSet = exports.isRegexp = exports.isPromise = exports.isPrivateIPv4 = exports.isPlainObject = exports.isOneDimensionalArray = exports.isObject = exports.isNumber = exports.isNode = exports.isLeapYear = exports.isIterable = exports.isIPv6 = exports.isIPv4 = exports.isIP = exports.isInteger = exports.isGenerator = exports.isGeneralizedTrue = exports.isGeneralizedFalse = exports.isFunction = exports.isFragmentNode = exports.isFormdata = exports.isError = exports.isEmail = exports.isElementNode = exports.isDate = exports.isDataview = exports.isDarkMode = exports.isClass = exports.isBoolean = exports.isBlob = exports.isBetween = exports.isAsyncFunction = exports.isArrowFunction = exports.isArrayBufferView = exports.isArrayBuffer = exports.isArray = exports.isArguments = void 0;
var arguments_1 = __importDefault(require("./arguments"));
exports.isArguments = arguments_1.default;
var array_1 = __importDefault(require("./array"));
exports.isArray = array_1.default;
var array_buffer_1 = __importDefault(require("./array-buffer")); // missing
exports.isArrayBuffer = array_buffer_1.default;
var array_buffer_view_1 = __importDefault(require("./array-buffer-view")); // missing
exports.isArrayBufferView = array_buffer_view_1.default;
var arrow_function_1 = __importDefault(require("./arrow-function"));
exports.isArrowFunction = arrow_function_1.default;
var async_function_1 = __importDefault(require("./async-function"));
exports.isAsyncFunction = async_function_1.default;
var between_1 = __importDefault(require("./between"));
exports.isBetween = between_1.default;
var blob_1 = __importDefault(require("./blob")); // missing
exports.isBlob = blob_1.default;
var boolean_1 = __importDefault(require("./boolean"));
exports.isBoolean = boolean_1.default;
var class_1 = __importDefault(require("./class"));
exports.isClass = class_1.default;
var dark_mode_1 = __importDefault(require("./dark-mode")); // missing
exports.isDarkMode = dark_mode_1.default;
var dataview_1 = __importDefault(require("./dataview")); // missing
exports.isDataview = dataview_1.default;
var date_1 = __importDefault(require("./date"));
exports.isDate = date_1.default;
var element_node_1 = __importDefault(require("./element-node"));
exports.isElementNode = element_node_1.default;
var email_1 = __importDefault(require("./email"));
exports.isEmail = email_1.default;
var empty_1 = __importDefault(require("./empty"));
var error_1 = __importDefault(require("./error"));
exports.isError = error_1.default;
var formdata_1 = __importDefault(require("./formdata")); // missing
exports.isFormdata = formdata_1.default;
var fragment_node_1 = __importDefault(require("./fragment-node")); // missing
exports.isFragmentNode = fragment_node_1.default;
var function_1 = __importDefault(require("./function"));
exports.isFunction = function_1.default;
var generalized_false_1 = __importDefault(require("./generalized-false"));
exports.isGeneralizedFalse = generalized_false_1.default;
var generalized_true_1 = __importDefault(require("./generalized-true"));
exports.isGeneralizedTrue = generalized_true_1.default;
var generator_1 = __importDefault(require("./generator"));
exports.isGenerator = generator_1.default;
var integer_1 = __importDefault(require("./integer"));
exports.isInteger = integer_1.default;
var ip_1 = __importDefault(require("./ip"));
exports.isIP = ip_1.default;
var ipv4_1 = __importDefault(require("./ipv4"));
exports.isIPv4 = ipv4_1.default;
var ipv6_1 = __importDefault(require("./ipv6"));
exports.isIPv6 = ipv6_1.default;
var iterable_1 = __importDefault(require("./iterable"));
exports.isIterable = iterable_1.default;
var leap_year_1 = __importDefault(require("./leap-year"));
exports.isLeapYear = leap_year_1.default;
var map_1 = __importDefault(require("./map"));
var node_1 = __importDefault(require("./node"));
exports.isNode = node_1.default;
var number_1 = __importDefault(require("./number"));
exports.isNumber = number_1.default;
var object_1 = __importDefault(require("./object"));
exports.isObject = object_1.default;
var one_dimensional_array_1 = __importDefault(require("./one-dimensional-array"));
exports.isOneDimensionalArray = one_dimensional_array_1.default;
var plain_object_1 = __importDefault(require("./plain-object"));
exports.isPlainObject = plain_object_1.default;
var private_ipv4_1 = __importDefault(require("./private-ipv4"));
exports.isPrivateIPv4 = private_ipv4_1.default;
var promise_1 = __importDefault(require("./promise"));
exports.isPromise = promise_1.default;
var regexp_1 = __importDefault(require("./regexp"));
exports.isRegexp = regexp_1.default;
var set_1 = __importDefault(require("./set"));
exports.isSet = set_1.default;
var string_1 = __importDefault(require("./string"));
exports.isString = string_1.default;
var text_node_1 = __importDefault(require("./text-node"));
exports.isTextNode = text_node_1.default;
var undefined_1 = __importDefault(require("./undefined"));
exports.isUndefined = undefined_1.default;
var url_1 = __importDefault(require("./url"));
exports.isUrl = url_1.default;
var window_1 = __importDefault(require("./window"));
exports.isWindow = window_1.default;
var is = {
    arguments: arguments_1.default,
    arrayBufferView: array_buffer_view_1.default,
    arrayBuffer: array_buffer_1.default,
    array: array_1.default,
    arrowFunction: arrow_function_1.default,
    asyncFunction: async_function_1.default,
    between: between_1.default,
    blob: blob_1.default,
    boolean: boolean_1.default,
    class: class_1.default,
    darkMode: dark_mode_1.default,
    dataview: dataview_1.default,
    date: date_1.default,
    elementNode: element_node_1.default,
    email: email_1.default,
    empty: empty_1.default,
    error: error_1.default,
    formdata: formdata_1.default,
    fragmentNode: fragment_node_1.default,
    function: function_1.default,
    generalizedFalse: generalized_false_1.default,
    generalizedTrue: generalized_true_1.default,
    generator: generator_1.default,
    number: number_1.default,
    integer: integer_1.default,
    ip: ip_1.default,
    ipv4: ipv4_1.default,
    ipv6: ipv6_1.default,
    iterable: iterable_1.default,
    leapYear: leap_year_1.default,
    map: map_1.default,
    node: node_1.default,
    object: object_1.default,
    oneDimensionalArray: one_dimensional_array_1.default,
    plainObject: plain_object_1.default,
    privateIPv4: private_ipv4_1.default,
    promise: promise_1.default,
    regexp: regexp_1.default,
    set: set_1.default,
    string: string_1.default,
    textNode: text_node_1.default,
    undefined: undefined_1.default,
    url: url_1.default,
    window: window_1.default
};
exports.default = is;
/* global module:true */
module.exports = is;
module.exports.default = is;
