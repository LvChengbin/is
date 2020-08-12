"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/ipv6.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ipv4_1 = __importDefault(require("./ipv4"));
const string_1 = __importDefault(require("./string"));
/**
 * BNF of IPv6:
 *
 * IPv6address =                             6( h16 ":" ) ls32
 *              /                       "::" 5( h16 ":" ) ls32
 *              / [               h16 ] "::" 4( h16 ":" ) ls32
 *              / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
 *              / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
 *              / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
 *              / [ *4( h16 ":" ) h16 ] "::"              ls32
 *              / [ *5( h16 ":" ) h16 ] "::"              h16
 *              / [ *6( h16 ":" ) h16 ] "::"
 *
 *  ls32 = ( h16 ":" h16 ) / IPv4address
 *       ; least-significant 32 bits of address
 *
 *  h16 = 1 * 4HEXDIG
 *      ; 16 bits of address represented in hexadcimal
 */
exports.default = (x) => {
    if (!string_1.default(x))
        return false;
    /**
     * An IPv6 address should have at least one colon(:)
     */
    if (!x.includes(':'))
        return false;
    /**
     * An IPv6 address can start or end with '::', but cannot start or end with a single colon.
     */
    if (/(^:[^:])|([^:]:$)/.test(x))
        return false;
    /**
     * An IPv6 address should consist of colon(:), dot(.) and hexadecimel
     */
    if (!/^[0-9A-Fa-f:.]{2,}$/.test(x))
        return false;
    /**
     * An IPv6 address should not include any sequences bellow:
     * 1. a hexadecimal with length greater than 4
     * 2. three or more consecutive colons
     * 3. two or more consecutive dots
     */
    if (/[0-9A-Fa-f]{5,}|:{3,}|\.{2,}/.test(x))
        return false;
    /**
     * In an IPv6 address, the "::" can only appear once.
     */
    if (x.split('::').length > 2)
        return false;
    /**
     * if the IPv6 address is in mixed form.
     */
    if (x.includes('.')) {
        const lastColon = x.lastIndexOf(':');
        const hexadecimal = x.substr(0, lastColon);
        const decimal = x.substr(lastColon + 1);
        /**
         * the decimal part should be an valid IPv4 address.
         */
        if (!ipv4_1.default(decimal))
            return false;
        /**
         * the length of the hexadecimal part should less than 6.
         */
        if (hexadecimal.split(':').length > 6)
            return false;
    }
    else {
        /**
         * An IPv6 address that is not in mixed form can at most have 8 hexadecimal sequences.
         */
        if (x.split(':').length > 8)
            return false;
    }
    return true;
};
