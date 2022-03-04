"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/plain-object.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = __importDefault(require("./function"));
var object_1 = __importDefault(require("./object"));
exports.default = (function (x) {
    if (!x || !object_1.default(x))
        return false;
    var proto = Object.getPrototypeOf(x);
    if (!proto)
        return true;
    var hasOwn = ({}).hasOwnProperty;
    var Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
    var fnToString = hasOwn.toString;
    return function_1.default(Ctor) && fnToString.call(Ctor) === fnToString.call(Object);
});
