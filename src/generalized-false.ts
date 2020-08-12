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

export default ( x: any, haystack: string[] = list ): boolean => {
    if( isString( x ) ) {
        return haystack.includes( ( x as string ).toLowerCase() );
    }
    return !x;
}
