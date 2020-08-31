/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/string.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default ( x: unknown ): x is string => {
    return typeof x === 'string' || x instanceof String;
}
