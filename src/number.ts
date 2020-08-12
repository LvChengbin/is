/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/number.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default ( x: any, strict: boolean = false ): x is number => {
    if( ({}).toString.call( x ) === '[object Number]' ) return true;
    if( strict ) return false;
    return !isNaN( parseFloat( x ) ) && isFinite( x ) && !/\.$/.test( x );
}
