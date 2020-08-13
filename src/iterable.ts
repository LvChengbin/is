/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/iterable.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

import isFunction from './function';

export default ( x: any ): boolean => {
    try {
        return isFunction( x[ Symbol.iterator ] );
    } catch( e ) {
        return false;
    }
}
