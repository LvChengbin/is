"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/async-function.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (x) => ({}).toString.call(x) === '[object AsyncFunction]';
