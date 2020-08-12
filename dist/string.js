"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/string.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (x) => {
    return typeof x === 'string' || x instanceof String;
};
