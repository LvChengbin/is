/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/empty.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

import isArray from './array';
import isString from './string';
import isObject from './object';

export default ( x: any ): boolean => {

    if( isArray( x ) || isString( x ) ) {
        return !( x as string ).length;
    }

    if( isObject( x ) ) {
        return !Object.keys( x as Record<any, any> ).length;
    }
    return !x;
};
