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

export default ( x: unknown, lower: any, upper: any, mode = 0 ): boolean => {
    if( !isNumber( x ) ) {
        if( !isFunction( ( x as string ).charCodeAt ) ) return false;
        x = ( x as string ).charCodeAt( 0 );
        lower = ( lower as string ).charCodeAt( 0 );
        upper = ( upper as string ).charCodeAt( 0 );
    }

    const n = x as number;

    if( upper < lower ) return false;

    // inclusive both lower and upper
    if( mode === 0 ) return n >= lower && n <= upper;

    // exclusive both lower and upper
    if( mode === 1 ) return n > lower && n < upper;

    // inclusive lower and exclusive upper
    if( mode === 2 ) return n >= lower && n < upper;

    // exclusive lower and inclusive upper
    if( mode === 3 ) return n > lower && n <= upper;

    return false;
}
