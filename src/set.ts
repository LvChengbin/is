/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/set.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

export default ( x: unknown ): boolean => ({}).toString.call( x ) === '[object Set]';
