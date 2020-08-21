"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/element-node.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
exports.default = (x) => { var _a; return !!(((_a = x) === null || _a === void 0 ? void 0 : _a.nodeType) === 1 && node_1.default(x)); };
