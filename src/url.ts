/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/url.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isString from './string';

export default ( x: unknown ): boolean => {
    if( !isString( x ) ) return false;
    try {
        new URL( x as string );
        return true;
    } catch( e ) {
        return false;
    }
}
