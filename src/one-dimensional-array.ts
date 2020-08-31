/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/one-dimensional-array.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

import isArray from './array';

<<<<<<< HEAD
export default ( x: any ): boolean => {
=======
export default ( x: unknown ): boolean => {
>>>>>>> x
    if( !isArray( x ) ) return false;

    for( const item of x as any[] ) {
        if( isArray( item ) ) return false;
    }
    return true;
};
