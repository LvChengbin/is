"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/fragment-node.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
exports.default = (x) => node_1.default(x) && x.nodeType === 11;
