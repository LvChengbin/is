/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/ipv6.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
<<<<<<< HEAD
declare const _default: (x: any) => boolean;
=======
declare const _default: (x: unknown) => boolean;
>>>>>>> x
/**
 * BNF of IPv6:
 *
 * IPv6address =                             6( h16 ":" ) ls32
 *              /                       "::" 5( h16 ":" ) ls32
 *              / [               h16 ] "::" 4( h16 ":" ) ls32
 *              / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
 *              / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
 *              / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
 *              / [ *4( h16 ":" ) h16 ] "::"              ls32
 *              / [ *5( h16 ":" ) h16 ] "::"              h16
 *              / [ *6( h16 ":" ) h16 ] "::"
 *
 *  ls32 = ( h16 ":" h16 ) / IPv4address
 *       ; least-significant 32 bits of address
 *
 *  h16 = 1 * 4HEXDIG
 *      ; 16 bits of address represented in hexadcimal
 */
export default _default;
