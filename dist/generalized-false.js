"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/generalized-false.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = __importDefault(require("./string"));
const list = ['false', 'no', '0', 'nay', 'n', 'disagree'];
exports.default = (x, haystack = list) => {
    if (string_1.default(x)) {
        return !x.length ? true : haystack.includes(x.toLowerCase());
    }
    return !x;
};
