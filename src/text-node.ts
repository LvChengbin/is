/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/text-node.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import isNode from './node';

<<<<<<< HEAD
export default ( x: any ): boolean => x && x.nodeType === 3 && isNode( x );
=======
export default ( x: unknown ): boolean => x && ( x as any ).nodeType === 3 && isNode( x );
>>>>>>> x
