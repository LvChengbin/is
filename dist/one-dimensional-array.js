"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/one-dimensional-array.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = __importDefault(require("./array"));
exports.default = (function (x) {
    if (!array_1.default(x))
        return false;
    for (var _i = 0, _a = x; _i < _a.length; _i++) {
        var item = _a[_i];
        if (array_1.default(item))
            return false;
    }
    return true;
});
