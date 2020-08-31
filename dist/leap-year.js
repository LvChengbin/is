"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/leap-year.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (x) => !!(!(x % 400) || (!(x % 4) && (x % 100)));
=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = __importDefault(require("./number"));
const string_1 = __importDefault(require("./string"));
exports.default = (x) => {
    if (!number_1.default(x))
        return false;
    const n = string_1.default(x) ? parseInt(x) : x;
    return !!(!(n % 400) || (!(n % 4) && (n % 100)));
};
>>>>>>> x
