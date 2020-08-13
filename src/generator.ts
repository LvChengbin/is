/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/generator.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

export default ( x: any ): boolean => {
    try {
        return new Function( 'x', 'return x.constructor === (function*(){}).constructor' )( x ) as boolean;
    } catch( e ) {
        return false;
    }
}
