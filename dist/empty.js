"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/empty.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("./array"));
const string_1 = __importDefault(require("./string"));
const object_1 = __importDefault(require("./object"));
exports.default = (x) => {
    if (array_1.default(x) || string_1.default(x)) {
        return !x.length;
    }
    if (object_1.default(x)) {
        return !Object.keys(x).length;
    }
    return !x;
};
