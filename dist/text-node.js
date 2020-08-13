"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/text-node.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
exports.default = (x) => x && x.nodeType === 3 && node_1.default(x);
