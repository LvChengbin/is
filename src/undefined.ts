/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/undefined.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

<<<<<<< HEAD
export default function( x: any ): boolean {
=======
export default function( x: unknown ): boolean {
>>>>>>> x
    if( !arguments.length ) {
        throw new TypeError( 'is.undefined should have at least one argument' );
    }
    return x === void 0;
}
