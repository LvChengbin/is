/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/integer.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isString from './string';
import isNumber from './number';

export default ( x: any, strict: boolean = false ): boolean => {
    if( isNumber( x, true ) ) return x % 1 === 0;
    if( strict ) return false;
    if( !isString( x ) ) return false;
    if( x === '-0' ) return true;
    return x.indexOf( '.' ) < 0 && String( parseInt( x ) ) === x;
}
