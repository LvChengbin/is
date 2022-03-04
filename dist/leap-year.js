"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/leap-year.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = __importDefault(require("./number"));
var string_1 = __importDefault(require("./string"));
exports.default = (function (x) {
    if (!number_1.default(x))
        return false;
    var n = string_1.default(x) ? parseInt(x) : x;
    return !!(!(n % 400) || (!(n % 4) && (n % 100)));
});
