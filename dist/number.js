"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/number.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = __importDefault(require("./string"));
exports.default = (function (x, strict) {
    if (strict === void 0) { strict = false; }
    if (({}).toString.call(x) === '[object Number]')
        return true;
    if (strict)
        return false;
    if (!string_1.default(x))
        return false;
    var n = parseFloat(x);
    return !isNaN(n) && !isNaN(Number(x)) && isFinite(n) && !/\.$/.test(x);
});
