/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/class.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isFunction from './function';
export default ( x: any ): boolean => isFunction( x ) && /^\s*class\s+/.test( x.toString() );
