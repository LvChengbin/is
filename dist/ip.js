"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/ip.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ipv4_1 = __importDefault(require("./ipv4"));
var ipv6_1 = __importDefault(require("./ipv6"));
exports.default = (function (x) { return ipv4_1.default(x) || ipv6_1.default(x); });
