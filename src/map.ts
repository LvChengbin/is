/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/map.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

export default ( x: unknown ): x is Map<any, any> => ({}).toString.call( x ) === '[object Map]';
