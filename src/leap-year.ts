/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/leap-year.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isNumber from './number';
import isString from './string';

export default ( x: unknown ): boolean => {
    if( !isNumber( x ) ) return false;
    const n = isString( x ) ? parseInt( x ) : x;
    return !!( !( n % 400 ) || ( !( n % 4 ) && ( n % 100 ) ) );
}
