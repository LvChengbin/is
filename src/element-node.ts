/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/element-node.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isNode from './node';

<<<<<<< HEAD
export default ( x: any ): boolean => !!( x?.nodeType === 1 && isNode( x ) );
=======
export default ( x: unknown ): boolean => !!( ( x as any )?.nodeType === 1 && isNode( x ) );
>>>>>>> x
