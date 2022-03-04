"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/object.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (x) { return x && typeof x === 'object' && !Array.isArray(x); });
