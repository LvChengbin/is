import is from '../src/is';
import Promise from '@lvchengbin/Promise';

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


    it( 'is.boolean', () => {
        expect( is.boolean( true ) ).toBeTruthy();
        expect( is.boolean( false ) ).toBeTruthy();
        expect( is.boolean( 0 ) ).toBeFalsy();
        expect( is.boolean( 1 ) ).toBeFalsy();
    } );

    it( 'is.date', () => {
        expect( is.date( new Date ) ).toBeTruthy();
        expect( is.date( +new Date ) ).toBeFalsy();
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

    it( 'is.false', () => {
        expect( is.false( false ) ).toBeTruthy();
        expect( is.false( 0 ) ).toBeTruthy();
        expect( is.false( 'false' ) ).toBeTruthy();
        expect( is.false( 'nay' ) ).toBeTruthy();
        expect( is.false( 'n' ) ).toBeTruthy();
        expect( is.false( 'no' ) ).toBeTruthy();
        expect( is.false( '0' ) ).toBeTruthy();
        expect( is.false( '' ) ).toBeTruthy();
        expect( is.false( '', false ) ).toBeTruthy();
        expect( is.false( true ) ).toBeFalsy();
        expect( is.false( 'true' ) ).toBeFalsy();
        expect( is.false( 'false', false ) ).toBeFalsy();
        expect( is.false( 'no', false ) ).toBeFalsy();
        expect( is.false( '0', false ) ).toBeFalsy();
    } );

    it( 'is.function', () => {
        expect( is.function( () => {} ) ).toBeTruthy();
        expect( is.function( function() {} ) ).toBeTruthy();
        expect( is.function( async function() {} ) ).toBeTruthy();
        expect( is.function( Array.isArray ) ).toBeTruthy();
        expect( is.function( new Object ) ).toBeFalsy();
        expect( is.function( 'function' ) ).toBeFalsy();
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
        expect( is.integer( '1', true ) ).toBeFalsy();
        expect( is.integer( '0', true ) ).toBeFalsy();
        expect( is.integer( '-0', true ) ).toBeFalsy();
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

    it( 'is.string', () => {
        expect( is.string( '' ) ).toBeTruthy();
        expect( is.string( '0' ) ).toBeTruthy();
        expect( is.string( String( 0 ) ) ).toBeTruthy();
        expect( is.string( new String( 'abc' ) ) ).toBeTruthy();
        expect( is.string( null ) ).toBeFalsy();
        expect( is.string( 0 ) ).toBeFalsy();
        expect( is.string( true ) ).toBeFalsy();
    } );

    it( 'is.true', () => {
        expect( is.true( true ) ).toBeTruthy();
        expect( is.true( 1 ) ).toBeTruthy();
        expect( is.true( 'true' ) ).toBeTruthy();
        expect( is.true( 'yes' ) ).toBeTruthy();
        expect( is.true( 'ok' ) ).toBeTruthy();
        expect( is.true( '1' ) ).toBeTruthy();
        expect( is.true( 'false', false ) ).toBeTruthy();
        expect( is.true( 'no', false ) ).toBeTruthy();
        expect( is.true( '0', false ) ).toBeTruthy();
        expect( is.true( false ) ).toBeFalsy();
        expect( is.true( 0 ) ).toBeFalsy();
        expect( is.true( 'false' ) ).toBeFalsy();
        expect( is.true( 'no' ) ).toBeFalsy();
        expect( is.true( '0' ) ).toBeFalsy();
    } );

    it( 'is.undefined', () => {
        expect( is.undefined() ).toBeFalsy();
        expect( is.undefined( undefined ) ).toBeTruthy();
    } );

    it( 'is.url', () => {
        expect( is.url( 'http://a.b' ) ).toBeTruthy();
        expect( is.url( 'https://a.b' ) ).toBeTruthy();
        expect( is.url( 'ftp://a.b' ) ).toBeTruthy();
        expect( is.url( 'https://a.b?x=1&y=2#xx' ) ).toBeTruthy();
        expect( is.url( 'http://localhost' ) ).toBeTruthy();
        expect( is.url( 'http://u:p@x.x:1000' ) ).toBeTruthy();
        expect( is.url( 'httpc://a.b?x=1&y=2#xx' ) ).toBeFalsy();
        expect( is.url( '://a.b?x=1&y=2#xx' ) ).toBeFalsy();
        expect( is.url( 'www.xx.com' ) ).toBeFalsy();
        expect( is.url( 'http://333.333.333.333' ) ).toBeFalsy();
        expect( is.url( 'http://www.xx.com:23543535' ) ).toBeFalsy();
    } );

    it( 'is.node', () => {
        expect( is.node( document.createElement( 'a' ) ) ).toBeTruthy();
        expect( is.node( document.createTextNode( 'x' ) ) ).toBeTruthy();
    } );

    it( 'is.textNode', () => {
        expect( is.textNode( document.createTextNode( 'ab' ) ) ).toBeTruthy();
        const div = document.createElement( 'div' );
        div.innerHTML = 'abc';
        expect( is.textNode( div.firstChild ) ).toBeTruthy();
        expect( is.textNode( div ) ).toBeFalsy();
        expect( is.textNode( '' ) ).toBeFalsy();
    } );

    it( 'is.elementNode', () => {
        expect( is.elementNode( document.createElement( 'div' ) ) ).toBeTruthy();
        expect( is.elementNode( document.createTextNode( 'div' ) ) ).toBeFalsy();
        expect( is.elementNode( {} ) ).toBeFalsy();
    } );

    it( 'is.window', () => {
        expect( is.window( window ) ).toBeTruthy();
        const iframe = document.createElement( 'iframe' );
        document.body.appendChild( iframe );
        expect( is.window( iframe.contentWindow ) ).toBeTruthy();
    } );

    it( 'is.class', () => {
        class A {}
        expect( is.class( A ) ).toBeTruthy();
        function a(){}
        expect( is.class( a ) ).toBeFalsy();
        const str = 'class A';
        expect( is.class( str ) ).toBeFalsy();
    } );

    it( 'is.ipv4', () => {
        expect( is.ipv4() ).toBeFalsy();
        expect( is.ipv4( '0.0.0.0' ) ).toBeTruthy();
        expect( is.ipv4( '10.10.10.10' ) ).toBeTruthy();
        expect( is.ipv4( '255.255.255.255' ) ).toBeTruthy();
        expect( is.ipv4( '256.0.0.0' ) ).toBeFalsy();
        expect( is.ipv4( '1.1.1.1.1' ) ).toBeFalsy();
        expect( is.ipv4( 'string' ) ).toBeFalsy();
        expect( is.ipv4( '1.2.3' ) ).toBeFalsy();
        expect( is.ipv4( 'a.b.c.d' ) ).toBeFalsy();
        expect( is.ipv4( '1..1..1..1.' ) ).toBeFalsy();
        expect( is.ipv4( '4.4.4.4.' ) ).toBeFalsy();
    } );
} );
