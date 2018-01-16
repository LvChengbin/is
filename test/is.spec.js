import is from '../src/is';

describe( 'is', () => {
    it( 'is.object', () => {
        expect( is.object( {} ) ).toBeTruthy();
        expect( is.object( new Object ) ).toBeTruthy();
        expect( is.object( new Date ) ).toBeTruthy();
        expect( is.object( Promise.resolve() ) ).toBeTruthy();
        expect( is.object( null ) ).toBeFalsy();
        expect( is.object( function() {} ) ).toBeFalsy();
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

    it( 'is.arrowFunction', () => {
        expect( is.arrowFunction( () => {} ) ).toBeTruthy();
        expect( is.arrowFunction( () => 1 ) ).toBeTruthy();
        expect( is.arrowFunction( () => {
            return 1;
        } ) ).toBeTruthy();
        expect( is.arrowFunction( '() => 1' ) ).toBeFalsy();
        expect( is.arrowFunction( function() {} ) ).toBeFalsy();
    } );

    it( 'is.boolean', () => {
        expect( is.boolean( true ) ).toBeTruthy();
        expect( is.boolean( false ) ).toBeTruthy();
        expect( is.boolean( 0 ) ).toBeFalsy();
        expect( is.boolean( 1 ) ).toBeFalsy();
    } );

    it( 'is.promise', () => {
        expect( is.promise( new Promise( () => {} ) ) ).toBeTruthy();
        expect( is.promise( Promise.resolve() ) ).toBeTruthy();
        expect( is.promise( Promise.reject() ) ).toBeTruthy();
    } );

    it( 'is.function', () => {
        expect( is.function( () => {} ) ).toBeTruthy();
        expect( is.function( function() {} ) ).toBeTruthy();
        expect( is.function( Array.isArray ) ).toBeTruthy();
        expect( is.function( new Object ) ).toBeFalsy();
        expect( is.function( 'function' ) ).toBeFalsy();
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

    it( 'is.false', () => {
        expect( is.false( false ) ).toBeTruthy();
        expect( is.false( 0 ) ).toBeTruthy();
        expect( is.false( 'false' ) ).toBeTruthy();
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

} );
