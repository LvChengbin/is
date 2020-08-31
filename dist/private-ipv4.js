"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/private-ipv4.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ipv4_1 = __importDefault(require("./ipv4"));
const string_1 = __importDefault(require("./string"));
exports.default = (x) => {
    if (!string_1.default(x))
        return false;
    return ipv4_1.default(x) && /^10\..*/.test(x) || /^192\.168\..*/.test(x) || /^172\.(1[6-9]|2[0-9]|3[0-1])\..*/.test(x);
};
