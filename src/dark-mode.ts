/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/dark-mode.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

export default (): boolean => !!window.matchMedia?.( '(prefers-color-scheme: dark)' )?.matches
