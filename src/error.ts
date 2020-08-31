/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/error.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

<<<<<<< HEAD
export default ( x: any ): boolean => ( {} ).toString.call( x ) === '[object Error]';
=======
export default ( x: unknown ): x is Error => ( {} ).toString.call( x ) === '[object Error]';
>>>>>>> x
