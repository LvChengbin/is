"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/class.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = __importDefault(require("./function"));
exports.default = (x) => function_1.default(x) && /^\s*class\s+/.test(x.toString());
