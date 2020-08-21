/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/fragment-node.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/


import isNode from './node';

export default ( x: unknown ): boolean => isNode( x ) && ( x as any ).nodeType === 11;
