/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/undefined.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default function( x: any ): boolean {
    if( !arguments.length ) {
        throw new TypeError( 'is.undefined should have at least one argument' );
    }
    return x === void 0;
}
