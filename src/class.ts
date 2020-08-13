/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/class.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isFunction from './function';
export default ( x: any ): boolean => {
    const fn = x.toString();

    return isFunction( x ) && (
        /^\s*class\s+/.test( fn )
        // babel transforms class to es5 function
        || /\s+_classCallCheck\(/.test( fn )
    )
}
