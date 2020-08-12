"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/integer.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = __importDefault(require("./string"));
const number_1 = __importDefault(require("./number"));
exports.default = (x, strict = false) => {
    if (number_1.default(x, true))
        return x % 1 === 0;
    if (strict)
        return false;
    if (!string_1.default(x))
        return false;
    if (x === '-0')
        return true;
    return x.indexOf('.') < 0 && String(parseInt(x)) === x;
};
