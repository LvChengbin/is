/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/string.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

<<<<<<< HEAD
export default ( x: any ): x is string => {
=======
export default ( x: unknown ): x is string => {
>>>>>>> x
    return typeof x === 'string' || x instanceof String;
}
