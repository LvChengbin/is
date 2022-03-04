"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/arrow-function.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = __importDefault(require("./function"));
exports.default = (function (x) {
    if (!function_1.default(x))
        return false;
    return /^(?:function)?\s*\(?[\w\s,]*\)?\s*=>/.test(x.toString());
});
