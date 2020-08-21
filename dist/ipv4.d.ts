/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/ipv4.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/02/2020
 * Description:
 ******************************************************************/
declare const _default: (x: unknown) => boolean;
/**
 * BNF of IPv4 address
 *
 * IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet
 *
 * dec-octet = DIGIT                ; 0-9
 *           / %x31-39 DIGIT        ; 10-99
 *           / "1" 2DIGIT           ; 100-199
 *           / "2" 2DIGIT           ; 200-249
 *           / "25" %x30-35         ; 250-255
 */
export default _default;
