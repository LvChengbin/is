/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/array-buffer-view.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default ( x: unknown ): boolean => ArrayBuffer.isView( x );
