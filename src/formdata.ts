/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/formdata.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

export default ( x: any ): boolean => ( {} ).toString.call( x ) === '[object FormData]';
