/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/between.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: to check if a number/letter is between two numbers/letters
 ******************************************************************/

import isNumber from './number';
import isFunction from './function';

export default ( x: any, lower: any, upper: any, mode: number = 0 ): boolean => {
    if( !isNumber( x ) ) {
        if( !isFunction( x.charCodeAt ) ) return false;
        x = x.charCodeAt( 0 );
        lower = lower.charCodeAt( 0 );
        upper = upper.charCodeAt( 0 );
    }

    if( upper < lower ) return false;

    // closed interval [lower, upper]
    if( mode === 0 ) return x >= lower && x <= upper;

    // open interval (lower, upper)
    if( mode === 1 ) return x > lower && x < upper;

    // half-closed interval [lower, upper)
    if( mode === 2 ) return x >= lower && x < upper;

    // half-closed interval (lower, upper]
    if( mode === 3 ) return x > lower && x <= upper;

    return false;
}
