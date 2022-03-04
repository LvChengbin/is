"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/dark-mode.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () { var _a, _b; return !!((_b = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-color-scheme: dark)')) === null || _b === void 0 ? void 0 : _b.matches); });
