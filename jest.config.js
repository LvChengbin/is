/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: is/jest.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 11/06/2020
 * Description: 
 ******************************************************************/

module.exports = {
    preset : 'ts-jest',
    testMatch : [
        '**/test/**/*.spec.ts'
    ],
    coverageReporters : [
        'text-summary',
        'text',
        'lcov'
    ],
    collectCoverageFrom : [
        'src/**/*.ts'
    ],
    testEnvironment : 'jsdom'
}
