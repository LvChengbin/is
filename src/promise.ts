/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/promise.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isFunction from './function';

export default ( x: any ): boolean => x && isFunction( x.then );
