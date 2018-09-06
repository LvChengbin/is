import isGenerator from '../src/generator';
import isArrowFunction from '../src/arrow-function';
import isAsyncFunction from '../src/async-function';
import isIterable from '../src/iterable';
import isClass from '../src/class';
import isFunction from '../src/function';
import isSet from '../src/set';
import isMap from '../src/map';

describe( 'generator', () => {
    it( 'true', () => {
        expect( isGenerator( function*(){} ) ).toBeTruthy();
        expect( isGenerator( function*x(){} ) ).toBeTruthy();
    } );

    it( 'false', () => {
        expect( isGenerator( function(){} ) ).toBeFalsy();
    } );
} );


describe( 'arrow function', () => {
    it( 'true', () => {
        expect( isArrowFunction( () => {} ) ).toBeTruthy();
        expect( isArrowFunction( () => 1 ) ).toBeTruthy();
        expect( isArrowFunction( () => {
            return 1;
        } ) ).toBeTruthy();
    } );

    it( 'false', () => {
        expect( isArrowFunction( '() => 1' ) ).toBeFalsy();
        expect( isArrowFunction( function() {} ) ).toBeFalsy();
    } );

} );

describe( 'async function', () => {
    it( 'true', () => {
        expect( isAsyncFunction( async () => {} ) ).toBeTruthy();
        expect( isAsyncFunction( () => {} ) ).toBeFalsy();
    } );

    it( 'false', () => {
        expect( isAsyncFunction( function() {} ) ).toBeFalsy();
    } );
} );

describe( 'iterable', () => {
    it( 'true', () => {
        function* iterable() { yield 1; }
        expect( isIterable( [] ) ).toBeTruthy();
        expect( isIterable( '' ) ).toBeTruthy();
        expect( isIterable( 'a' ) ).toBeTruthy();
        expect( isIterable( new Map() ) ).toBeTruthy();
        expect( isIterable( new Set() ) ).toBeTruthy();
        expect( isIterable( iterable() ) ).toBeTruthy();
        ( function() { 
            expect( isIterable( arguments ) ).toBeTruthy();
        } )();
    } );
} );

describe( 'class', () => {
    it( 'true', () => {
        class A {}
        expect( isClass( A ) ).toBeTruthy();
        class B extends A{}
        expect( isClass( B ) ).toBeTruthy();
    } );
    it( 'false', () => {
        function a(){}
        expect( isClass( a ) ).toBeFalsy();
        const str = 'class A';
        expect( isClass( str ) ).toBeFalsy();
    } );
} );

describe( 'is.function', () => {
    it( 'async function', () => {
        expect( isFunction( async function() {} ) ).toBeTruthy();
    } );
} );

describe( 'Map & Set', () => {
    it( 'Set', () => {
        expect( isSet( new Set() ) ).toBeTruthy();        
        expect( isSet( [] ) ).toBeFalsy();        
    } ); 

    it( 'Map', () => {
        expect( isMap( new Map() ) ).toBeTruthy();        
        expect( isMap( {} ) ).toBeFalsy();        
    } ); 
} );
