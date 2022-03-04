"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/url.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = __importDefault(require("./string"));
exports.default = (function (x) {
    if (!string_1.default(x))
        return false;
    try {
        new URL(x);
        return true;
    }
    catch (e) {
        return false;
    }
});
