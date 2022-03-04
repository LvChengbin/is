"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/generator.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (x) {
    try {
        return new Function('x', 'return x.constructor === (function*(){}).constructor')(x);
    }
    catch (e) {
        return false;
    }
});
