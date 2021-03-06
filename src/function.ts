/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/function.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isAsyncFunction from './async-function';

export default ( x: unknown ): x is ( ...args: any[] ) => any => {
    return ({}).toString.call( x ) === '[object Function]' || isAsyncFunction( x );
}
