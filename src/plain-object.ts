/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/plain-object.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isFunction from './function';
import isObject from './object';

export default ( x: any ): boolean => {
    if( !x || !isObject( x ) ) return false;
    const proto: any = Object.getPrototypeOf( x );
    if( !proto ) return true;
    const hasOwn = ({}).hasOwnProperty;
    const Ctor = hasOwn.call( proto, 'constructor' ) && proto.constructor;
    const fnToString = hasOwn.toString;
    return isFunction( Ctor ) && fnToString.call( Ctor ) === fnToString.call( Object );
}
