/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/array.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default ( x: any ): x is any[] => Array.isArray( x )