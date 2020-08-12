"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/generalized-true.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = __importDefault(require("./string"));
const list = ['true', 'yes', '1', 'yea', 'y', 'agree', 'ok', 'yep'];
exports.default = (x, haystack = list) => {
    if (string_1.default(x)) {
        return haystack.includes(x.toLowerCase());
    }
    return !!x;
};
