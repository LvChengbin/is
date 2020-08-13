"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/undefined.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(x) {
    if (!arguments.length) {
        throw new TypeError('is.undefined should have at least one argument');
    }
    return x === void 0;
}
exports.default = default_1;
