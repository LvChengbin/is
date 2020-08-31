/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/window.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

<<<<<<< HEAD
export default ( x: any ): boolean => x && x === x.window;
=======
export default ( x: unknown ): boolean => x && x === ( x as any ).window;
>>>>>>> x
