/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/leap-year.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default ( x: any ): boolean => !!( !( x % 400 ) || ( !( x % 4 ) && ( x % 100 ) ) );
