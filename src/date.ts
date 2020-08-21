/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/date.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default ( x: unknown ): x is Date => ({}).toString.call( x ) === '[object Date]';
