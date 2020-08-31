/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/blob.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

<<<<<<< HEAD
export default ( x: any ): boolean => ({}).toString.call( x ) === '[object Blob]';
=======
export default ( x: unknown ): x is Blob => ({}).toString.call( x ) === '[object Blob]';
>>>>>>> x
