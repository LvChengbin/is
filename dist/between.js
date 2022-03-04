"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/between.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: to check if a number/letter is between two numbers/letters
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = __importDefault(require("./number"));
var function_1 = __importDefault(require("./function"));
exports.default = (function (x, lower, upper, mode) {
    if (mode === void 0) { mode = 0; }
    if (!number_1.default(x)) {
        if (!function_1.default(x.charCodeAt))
            return false;
        x = x.charCodeAt(0);
        lower = lower.charCodeAt(0);
        upper = upper.charCodeAt(0);
    }
    var n = x;
    if (upper < lower)
        return false;
    // inclusive both lower and upper
    if (mode === 0)
        return n >= lower && n <= upper;
    // exclusive both lower and upper
    if (mode === 1)
        return n > lower && n < upper;
    // inclusive lower and exclusive upper
    if (mode === 2)
        return n >= lower && n < upper;
    // exclusive lower and inclusive upper
    if (mode === 3)
        return n > lower && n <= upper;
    return false;
});
