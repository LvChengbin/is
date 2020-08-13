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
const number_1 = __importDefault(require("./number"));
const function_1 = __importDefault(require("./function"));
exports.default = (x, lower, upper, mode = 0) => {
    if (!number_1.default(x)) {
        if (!function_1.default(x.charCodeAt))
            return false;
        x = x.charCodeAt(0);
        lower = lower.charCodeAt(0);
        upper = upper.charCodeAt(0);
    }
    if (upper < lower)
        return false;
    // closed interval [lower, upper]
    if (mode === 0)
        return x >= lower && x <= upper;
    // open interval (lower, upper)
    if (mode === 1)
        return x > lower && x < upper;
    // half-closed interval [lower, upper)
    if (mode === 2)
        return x >= lower && x < upper;
    // half-closed interval (lower, upper]
    if (mode === 3)
        return x > lower && x <= upper;
    return false;
};
