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
const array_1 = __importDefault(require("./array"));
exports.default = (x) => {
    if (!array_1.default(x))
        return false;
    for (const item of x) {
        if (array_1.default(item))
            return false;
    }
    return true;
};
