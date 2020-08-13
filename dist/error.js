"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/error.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (x) => ({}).toString.call(x) === '[object Error]';
