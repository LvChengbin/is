/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/array-buffer.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default ( x: unknown ): boolean => ({}).toString.call( x ) === '[object ArrayBuffer]';
