/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/ip.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description: 
 ******************************************************************/

import ipv4 from './ipv4';
import ipv6 from './ipv6';

<<<<<<< HEAD
export default ( x: any ): boolean => ipv4( x ) || ipv6( x );
=======
export default ( x: unknown ): boolean => ipv4( x ) || ipv6( x );
>>>>>>> x
