"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/leap-year.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (x) => !!(!(x % 400) || (!(x % 4) && (x % 100)));
