/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/private-ipv4.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isIPv4 from './ipv4';
<<<<<<< HEAD

export default ( x: any ): boolean => {
=======
import isString from './string';

export default ( x: unknown ): boolean => {
    if( !isString( x ) ) return false;
>>>>>>> x
    return isIPv4( x ) && /^10\..*/.test( x ) || /^192\.168\..*/.test( x ) || /^172\.(1[6-9]|2[0-9]|3[0-1])\..*/.test( x );
}
