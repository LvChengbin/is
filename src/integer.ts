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

<<<<<<< HEAD
export default ( x: any ): boolean => {
=======
export default ( x: unknown ): boolean => {
>>>>>>> x
    if( isNumber( x, true ) ) return x % 1 === 0;
    if( !isString( x ) ) return false;
    if( x === '-0' ) return true;
    return x.indexOf( '.' ) < 0 && String( parseInt( x ) ) === x;
}
