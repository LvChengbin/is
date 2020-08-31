/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/arrow-function.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isFunction from './function';

export default ( x: unknown ): boolean => {
    if( !isFunction( x ) ) return false;
    return /^(?:function)?\s*\(?[\w\s,]*\)?\s*=>/.test( x.toString() );
}
