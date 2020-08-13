/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/object.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default ( x: any ): boolean => x && typeof x === 'object' && !Array.isArray( x );
