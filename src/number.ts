/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/number.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isString from './string';

export default ( x: unknown, strict = false ): x is number => {
    if( ({}).toString.call( x ) === '[object Number]' ) return true;
    if( strict ) return false;
    if( !isString( x ) ) return false;
    const n = parseFloat( x );
    return !isNaN( n ) && !isNaN( Number( x ) ) && isFinite( n ) && !/\.$/.test( x );
}
