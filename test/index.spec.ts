/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: test/index.spec.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 08/12/2020
 * Description: 
 ******************************************************************/

import is from '../src';

describe( 'is', () => {
    it( 'is.arguments', () => {
        ( function() {
            expect( is.arguments( arguments ) ).toBeTruthy();
        } )();
        expect( is.arguments( [] ) ).toBeFalsy();
    } );

    it( 'is.array', () => {
        ( function() {
            expect( is.array( arguments ) ).toBeFalsy();
        } )();
        expect( is.array( [] ) ).toBeTruthy();
    } );

    it( 'is.arrayBuffer', () => {
        // @todo 
    } );

    it( 'is.arrayBufferView', () => {
        // @todo 
    } );

    it( 'is.arrowFunction.true', () => {
        expect( is.arrowFunction( () => {} ) ).toBeTruthy();
        expect( is.arrowFunction( () => 1 ) ).toBeTruthy();
        expect( is.arrowFunction( () => {
            return 1;
        } ) ).toBeTruthy();
    } );

    it( 'is.arrowFunction.false', () => {
        expect( is.arrowFunction( '() => 1' ) ).toBeFalsy();
        expect( is.arrowFunction( function() {} ) ).toBeFalsy();
    } );

    it( 'is.asyncFunction.true', () => {
        expect( is.asyncFunction( async () => {} ) ).toBeTruthy();
        expect( is.asyncFunction( () => {} ) ).toBeFalsy();
    } );

    it( 'is.asyncFunction.false', () => {
        expect( is.asyncFunction( function() {} ) ).toBeFalsy();
    } );

    it( 'is.between for checking numbers', () => {
        expect( is.between( 0, -1, 1 ) ).toBeTruthy();
        expect( is.between( 0, 0, 0 ) ).toBeTruthy();
        expect( is.between( 0, 0, 1 ) ).toBeTruthy();
        expect( is.between( 0, -1, 0 ) ).toBeTruthy();

        expect( is.between( -1, -1, 1, 1 ) ).toBeFalsy();
        expect( is.between( 0, 0, 0, 1 ) ).toBeFalsy();
        expect( is.between( 0, 0, 1, 1 ) ).toBeFalsy();
        expect( is.between( 0, -1, 0, 1 ) ).toBeFalsy();
    } );

    it( 'is.between for checking letters', () => {
        expect( is.between( 'c', 'b', 'd' ) ).toBeTruthy();
        expect( is.between( 'c', 'c', 'c' ) ).toBeTruthy();
        expect( is.between( 'c', 'c', 'd' ) ).toBeTruthy();
        expect( is.between( 'c', 'b', 'c' ) ).toBeTruthy();

        expect( is.between( 'b', 'b', 'd', 1 ) ).toBeFalsy();
        expect( is.between( 'c', 'c', 'c', 1 ) ).toBeFalsy();
        expect( is.between( 'c', 'c', 'd', 1 ) ).toBeFalsy();
        expect( is.between( 'c', 'b', 'c', 1 ) ).toBeFalsy();
    } );

    it( 'is.blob', () => {
        // @todo 
    } );

    it( 'is.boolean', () => {
        expect( is.boolean( true ) ).toBeTruthy();
        expect( is.boolean( false ) ).toBeTruthy();
        expect( is.boolean( 0 ) ).toBeFalsy();
        expect( is.boolean( 1 ) ).toBeFalsy();
    } );

    it( 'is.class.true', () => {
        class A {}
        expect( is.class( A ) ).toBeTruthy();
        class B extends A{}
        expect( is.class( B ) ).toBeTruthy();
    } );

    it( 'is.class.false', () => {
        function a(){}
        expect( is.class( a ) ).toBeFalsy();
        const str = 'class A';
        expect( is.class( str ) ).toBeFalsy();
    } );

    it( 'is.darkMode', () => {
        // @todo 
    } );

    it( 'is.dataview', () => {
        // @todo 
    } );

    it( 'is.date', () => {
        expect( is.date( new Date ) ).toBeTruthy();
        expect( is.date( +new Date ) ).toBeFalsy();
    } );

    it( 'is.elementNode', () => {
        expect( is.elementNode( document.createElement( 'div' ) ) ).toBeTruthy();
        expect( is.elementNode( document.createTextNode( 'div' ) ) ).toBeFalsy();
        expect( is.elementNode( {} ) ).toBeFalsy();
    } );

    it( 'is.email', () => {
        expect( is.email( 'a@b.cc' ) ).toBeTruthy();
        expect( is.email( 'a.x@b.cc' ) ).toBeTruthy();
        expect( is.email( 'a.x@b.c.dd' ) ).toBeTruthy();
        expect( is.email( '@b.c.dd' ) ).toBeFalsy();
        expect( is.email( 'b.c.dd' ) ).toBeFalsy();
        expect( is.email( 'b@' ) ).toBeFalsy();
        expect( is.email( 'a#x@b.c.dd' ) ).toBeFalsy();
        expect( is.email( 'a-x@b.cc' ) ).toBeFalsy();
    } );

    it( 'is.empty', () => {
        expect( is.empty() ).toBeTruthy();
        expect( is.empty( false ) ).toBeTruthy();
        expect( is.empty( '' ) ).toBeTruthy();
        expect( is.empty( null ) ).toBeTruthy();
        expect( is.empty( [] ) ).toBeTruthy();
        expect( is.empty( {} ) ).toBeTruthy();
        expect( is.empty( 0 ) ).toBeTruthy();
        expect( is.empty( parseInt( 'abc' ) ) ).toBeTruthy();
        expect( is.empty( '0' ) ).toBeFalsy();
        expect( is.empty( 1 ) ).toBeFalsy();
    } );

    it( 'is.error', () => {
        expect( is.error( new Error ) ).toBeTruthy();
        expect( is.error( new TypeError ) ).toBeTruthy();
    } );

    it( 'is.formdata', () => {
        // @todo
    } );

    it( 'is.fragmentNode', () => {
        // @todo
    } );

    it( 'is.function', () => {
        expect( is.function( () => {} ) ).toBeTruthy();
        expect( is.function( function() {} ) ).toBeTruthy();
        expect( is.function( Array.isArray ) ).toBeTruthy();
        expect( is.function( new Object ) ).toBeFalsy();
        expect( is.function( 'function' ) ).toBeFalsy();
        expect( is.function( async function() {} ) ).toBeTruthy();
    } );

    it( 'is.generalizedFalse', () => {
        expect( is.generalizedFalse( false ) ).toBeTruthy();
        expect( is.generalizedFalse( 0 ) ).toBeTruthy();
        expect( is.generalizedFalse( 'false' ) ).toBeTruthy();
        expect( is.generalizedFalse( 'nay' ) ).toBeTruthy();
        expect( is.generalizedFalse( 'n' ) ).toBeTruthy();
        expect( is.generalizedFalse( 'no' ) ).toBeTruthy();
        expect( is.generalizedFalse( '0' ) ).toBeTruthy();
        expect( is.generalizedFalse( '' ) ).toBeTruthy();
        expect( is.generalizedFalse( true ) ).toBeFalsy();
        expect( is.generalizedFalse( 'true' ) ).toBeFalsy();
    } );

    it( 'is.generalizedTrue', () => {
        expect( is.generalizedTrue( true ) ).toBeTruthy();
        expect( is.generalizedTrue( 1 ) ).toBeTruthy();
        expect( is.generalizedTrue( 'true' ) ).toBeTruthy();
        expect( is.generalizedTrue( 'yes' ) ).toBeTruthy();
        expect( is.generalizedTrue( 'ok' ) ).toBeTruthy();
        expect( is.generalizedTrue( '1' ) ).toBeTruthy();
        expect( is.generalizedTrue( false ) ).toBeFalsy();
        expect( is.generalizedTrue( 0 ) ).toBeFalsy();
        expect( is.generalizedTrue( 'false' ) ).toBeFalsy();
        expect( is.generalizedTrue( 'no' ) ).toBeFalsy();
        expect( is.generalizedTrue( '0' ) ).toBeFalsy();
    } );

    it( 'is.generator.true', () => {
        expect( is.generator( function*(){} ) ).toBeTruthy();
        expect( is.generator( function*x(){} ) ).toBeTruthy();
    } );

    it( 'is.generator.false', () => {
        expect( is.generator( function(){} ) ).toBeFalsy();
    } );

    it( 'is.integer', () => {
        expect( is.integer( 1 ) ).toBeTruthy();
        expect( is.integer( 0 ) ).toBeTruthy();
        expect( is.integer( '1' ) ).toBeTruthy();
        expect( is.integer( '0' ) ).toBeTruthy();
        expect( is.integer( '-0' ) ).toBeTruthy();
        expect( is.integer( 2.0 ) ).toBeTruthy();
        expect( is.integer( '-1.0' ) ).toBeFalsy();
        expect( is.integer( '1.1' ) ).toBeFalsy();
        expect( is.integer( 1.1 ) ).toBeFalsy();
        expect( is.integer( 1.1 ) ).toBeFalsy();
    } );

    it( 'is.iterable.true', () => {
        function* iterable() { yield 1; }
        expect( is.iterable( [] ) ).toBeTruthy();
        expect( is.iterable( '' ) ).toBeTruthy();
        expect( is.iterable( 'a' ) ).toBeTruthy();
        expect( is.iterable( new Map() ) ).toBeTruthy();
        expect( is.iterable( new Set() ) ).toBeTruthy();
        expect( is.iterable( iterable() ) ).toBeTruthy();
        ( function() { 
            expect( is.iterable( arguments ) ).toBeTruthy();
        } )();
    } );

    it( 'leap year', () => {
        const leapYears = '1952,1956,1960,1964,1968,1972,1976,1980,1984,1988,1992,1996,2000,2004,2008,2012,2016,2020,2024,2028,2032,2036,2040,2044,2048'.split( ',' );
        const commonYears = '1700,1800,1900,2001,2010'.split( ',' );
        for( const year of leapYears ) {
            expect( is.leapYear( year ) ).toBeTruthy(  ); 
        }

        for( const year of commonYears ) {
            expect( is.leapYear( year ) ).toBeFalsy();
        }
    } );

    it( 'is.map', () => {
        expect( is.map( new Map() ) ).toBeTruthy();        
        expect( is.map( {} ) ).toBeFalsy();        
    } ); 

    it( 'is.node', () => {
        expect( is.node( document.createElement( 'a' ) ) ).toBeTruthy();
        expect( is.node( document.createTextNode( 'x' ) ) ).toBeTruthy();
    } );

    it( 'is.number', () => {
        expect( is.number( 1 ) ).toBeTruthy();
        expect( is.number( '1' ) ).toBeTruthy();
        expect( is.number( '1.0' ) ).toBeTruthy();
        expect( is.number( '1E1' ) ).toBeTruthy();
        expect( is.number( 1E1 ) ).toBeTruthy();
        expect( is.number( '1.0.0' ) ).toBeFalsy();
        expect( is.number( 'a' ) ).toBeFalsy();
        expect( is.number( '1', true ) ).toBeFalsy();
        expect( is.number( '1.0', true ) ).toBeFalsy();
    } );

    it( 'is.object', () => {
        expect( is.object( {} ) ).toBeTruthy();
        expect( is.object( new Object ) ).toBeTruthy();
        expect( is.object( new Date ) ).toBeTruthy();
        expect( is.object( Promise.resolve() ) ).toBeTruthy();
        expect( is.object( null ) ).toBeFalsy();
        expect( is.object( function() {} ) ).toBeFalsy();
    } );

    it( 'is.oneDimensionalArray', () => {
        expect( is.oneDimensionalArray( [] ) ).toBeTruthy();
        expect( is.oneDimensionalArray( [ 1, 2, 3, 'a', 'b', 'c' ] ) ).toBeTruthy();
        expect( is.oneDimensionalArray( [ 1, 2, 3, {} ] ) ).toBeTruthy();
        expect( is.oneDimensionalArray( [ 1, 2, 3, function() {} ] ) ).toBeTruthy();
        expect( is.oneDimensionalArray( [ 1, 2, 3, [] ] ) ).toBeFalsy();
        expect( is.oneDimensionalArray( {} ) ).toBeFalsy();
        expect( is.oneDimensionalArray( 'abc' ) ).toBeFalsy();
    } );

    it( 'is.plainObject', () => {
        expect( is.plainObject( {} ) ).toBeTruthy();
        expect( is.plainObject( { constructor : 1 } ) ).toBeTruthy();
        expect( is.plainObject( new Object ) ).toBeTruthy();
        expect( is.plainObject( new Date ) ).toBeFalsy();
        expect( is.plainObject( [] ) ).toBeFalsy();
        expect( is.plainObject( Promise.resolve() ) ).toBeFalsy();
    } );

    it( 'is.promise', () => {
        expect( is.promise( new Promise( () => {} ) ) ).toBeTruthy();
        expect( is.promise( Promise.resolve() ) ).toBeTruthy();
        expect( is.promise( Promise.reject() ) ).toBeTruthy();
    } );

    it( 'is.regexp', () => {
        expect( is.regexp( /ii/ ) ).toBeTruthy();
        expect( is.regexp( new RegExp( '' ) ) ).toBeTruthy();
        expect( is.regexp( '/i/' ) ).toBeFalsy();
    } );

    it( 'is.set', () => {
        expect( is.set( new Set() ) ).toBeTruthy();        
        expect( is.set( [] ) ).toBeFalsy();        
    } ); 

    it( 'is.string', () => {
        expect( is.string( '' ) ).toBeTruthy();
        expect( is.string( '0' ) ).toBeTruthy();
        expect( is.string( String( 0 ) ) ).toBeTruthy();
        expect( is.string( new String( 'abc' ) ) ).toBeTruthy();
        expect( is.string( null ) ).toBeFalsy();
        expect( is.string( 0 ) ).toBeFalsy();
        expect( is.string( true ) ).toBeFalsy();
    } );

    it( 'is.textNode', () => {
        expect( is.textNode( document.createTextNode( 'ab' ) ) ).toBeTruthy();
        const div = document.createElement( 'div' );
        div.innerHTML = 'abc';
        expect( is.textNode( div.firstChild ) ).toBeTruthy();
        expect( is.textNode( div ) ).toBeFalsy();
        expect( is.textNode( '' ) ).toBeFalsy();
    } );

    it( 'is.undefined', () => {
        expect( () => is.undefined() ).toThrow();
        expect( is.undefined( undefined ) ).toBeTruthy();
    } );

    it( 'is.window', () => {
        expect( is.window( window ) ).toBeTruthy();
        const iframe = document.createElement( 'iframe' );
        iframe.style.display = 'none';
        document.body.appendChild( iframe );
        expect( is.window( iframe.contentWindow ) ).toBeTruthy();
    } );
} );

const validIPv4 = [
    '0.0.0.0',
    '255.255.255.255',
    '10.10.10.10',
    '1.1.1.1',
    '200.200.200.200'
];

const invalidIPv4 = [
    'a.0.0.0',
    '0..0.0.0',
    '100.100.100.100.100',
    '0.0.0.256',
    'string',
    'a.b.c.d',
    '1..1..1..1.',
    '4.4.4.4.',
    '1.1.1',
    ''
];

describe( 'valid IPv4 addresses', () => {
    for( let item of validIPv4 ) {
        it( item, () => {
            expect( is.ipv4( item ) ).toBeTruthy(); 
        } );
    }
} );

describe( 'invalid IPv4 addresses', () => {
    for( let item of invalidIPv4 ) {
        it( item, () => {
            expect( is.ipv4( item ) ).toBeFalsy(); 
        } );
    }
} );

const validPrivateIPv4 = [
    '10.0.0.0',
    '10.0.0.1',
    '10.255.255.255',
    '172.16.0.1',
    '172.31.255.254',
    '172.17.4.55',
    '192.168.0.0',
    '192.168.43.56',
    '192.168.255.255'
];

const invalidPrivateIPv4 = [
    '2.2.2.2',
    '0.0.0.0',
    '255.255.255.255',
    'not an IPv4 address',
    '172.32.0.0',
    '172.15.0.0'
];


describe( 'private IPv4 addresses', () => {
    for( let item of validPrivateIPv4 ) {
        it( item, () => {
            expect( is.privateIPv4( item ) ).toBeTruthy(); 
        } );
    }
} );

describe( 'not private IPv4 addresses', () => {
    for( let item of invalidPrivateIPv4 ) {
        it( item, () => {
            expect( is.privateIPv4( item ) ).toBeFalsy(); 
        } );
    }
} );

const validIPv6 = [
    '2001:DB8:0:0:8:800:200C:417A',
    'FF01:0:0:0:0:0:0:101',
    '0:0:0:0:0:0:0:1',
    '0:0:0:0:0:0:0:0',
    'FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF',
    '2001:DB8::8:800:200C:417A',
    'FF01::101',
    '::1',
    '100::',
    '::',
    'ABCD:EF01:2345:6789:ABCD:EF01:2345:6789',
    '0:0:0:0:0:0:13.1.68.3',
    '0:0:0:0:0:FFFF:127.144.52.38',
    '::13.1.68.3',
    '::FFFF:129.144.52.38'
];

const invalidIPv6 = [
    '2001:DB8:0:0:0:8:800:200C:417A',
    '20011:DB8:0:0:0:8:800:200C:417A',
    '0',
    '',
    '1.1.1.1',
    ':1.1.1.1',
    '1.1.1.1:',
    '.1.1.1.',
    ':::1',
    '::1.1.1',
    '::1..1.1',
    'FF01::1::101',
    'FFFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF'
];

describe( 'valid IPv6 addresses', () => {
    for( let item of validIPv6 ) {
        it( item, () => {
            expect( is.ipv6( item ) ).toBeTruthy(); 
        } );
    }
} );

describe( 'invalid IPv6 addresses', () => {
    for( let item of invalidIPv6 ) {
        it( item, () => {
            expect( is.ipv6( item ) ).toBeFalsy(); 
        } );
    }
} );
