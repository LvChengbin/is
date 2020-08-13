/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/generalized-false.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

import isString from './string';

const list = [ 'false', 'no', '0', 'nay', 'n', 'disagree' ];

export default ( x: any, haystack: any[] = list ): boolean => {
    if( isString( x ) ) {
        return !x.length ? true : haystack.includes( x.toLowerCase() );
    }
    return !x;
}
