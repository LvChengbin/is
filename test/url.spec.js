import is from '../src/is';

describe( 'is.url', () => {

    it( 'http', () => {
        expect( is.url( 'http://a.b' ) ).toEqual( {
            href : 'http://a.b/',
            protocol : 'http:',
            origin : 'http://a.b',
            username : '',
            password : '',
            hostname : 'a.b',
            host : 'a.b',
            port : '',
            pathname : '/',
            search : '',
            hash : ''
        } );
    } );

    it( 'https', () => {
        expect( is.url( 'https://a.b' ) ).toEqual( {
            href : 'https://a.b/',
            protocol : 'https:',
            origin : 'https://a.b',
            username : '',
            password : '',
            hostname : 'a.b',
            host : 'a.b',
            port : '',
            pathname : '/',
            search : '',
            hash : ''
        } );
    } );

    it( 'ftp', () => {
        expect( is.url( 'ftp://a.b' ) ).toEqual( {
            href : 'ftp://a.b/',
            protocol : 'ftp:',
            origin : 'ftp://a.b',
            username : '',
            password : '',
            hostname : 'a.b',
            host : 'a.b',
            port : '',
            pathname : '/',
            search : '',
            hash : ''
        } );
    } );

    it( 'username & password', () => {
        expect( is.url( 'https://u:p@a.b:9000?x=1&y=2#xx' ) ).toEqual( {
            href : 'https://u:p@a.b:9000/?x=1&y=2#xx',
            protocol : 'https:',
            origin : 'https://a.b:9000',
            username : 'u',
            password : 'p',
            hostname : 'a.b',
            host : 'a.b:9000',
            port : '9000',
            pathname : '/',
            search : '?x=1&y=2',
            hash : '#xx'
        } );
    } );

    it( 'localhost', () => {
        expect( is.url( 'http://localhost' ) ).toEqual( {
            href : 'http://localhost/',
            protocol : 'http:',
            origin : 'http://localhost',
            username : '',
            password : '',
            hostname : 'localhost',
            host : 'localhost',
            port : '',
            pathname : '/',
            search : '',
            hash : ''
        } );
    } );

    it( 'port', () => {
        expect( is.url( 'ftp://u:p@x.x:1000' ) ).toEqual( {
            href : 'ftp://u:p@x.x:1000/',
            protocol : 'ftp:',
            origin : 'ftp://x.x:1000',
            username : 'u',
            password : 'p',
            hostname : 'x.x',
            host : 'x.x:1000',
            port : '1000',
            pathname : '/',
            search : '',
            hash : ''
        } );
    } );
    it( 'search & hash', () => {
        expect( is.url( 'httpc://a.b/a/b/c?x=1&y=2#xx' ) ).toEqual( {
            href : 'httpc://a.b/a/b/c?x=1&y=2#xx',
            protocol : 'httpc:',
            origin : null,
            username : '',
            password : '',
            hostname : '',
            host : '',
            port : '',
            pathname : '//a.b/a/b/c',
            search : '?x=1&y=2',
            hash : '#xx'
        } );
    } );

    it( 'IPv4', () => {
        expect( is.url( 'http://1.1.1.1:9999' ) ).toEqual( {
            href : 'http://1.1.1.1:9999/',
            protocol : 'http:',
            origin : 'http://1.1.1.1:9999',
            username : '',
            password : '',
            hostname : '1.1.1.1',
            host : '1.1.1.1:9999',
            port : '9999',
            pathname : '/',
            search : '',
            hash : ''
        } );
    } );

    it( 'Incompleted IPv4', () => {
        expect( is.url( 'http://1:9999' ) ).toEqual( {
            href : 'http://0.0.0.1:9999/',
            protocol : 'http:',
            origin : 'http://0.0.0.1:9999',
            username : '',
            password : '',
            hostname : '0.0.0.1',
            host : '0.0.0.1:9999',
            port : '9999',
            pathname : '/',
            search : '',
            hash : ''
        } );
    } );

    it( 'Integer IPv4', () => {
        expect( is.url( 'http://300:9999' ) ).toEqual( {
            href : 'http://0.0.1.44:9999/',
            protocol : 'http:',
            origin : 'http://0.0.1.44:9999',
            username : '',
            password : '',
            hostname : '0.0.1.44',
            host : '0.0.1.44:9999',
            port : '9999',
            pathname : '/',
            search : '',
            hash : ''
        } );
    } );

    it( 'IPv6', () => {
        expect( is.url( 'http://[::80]:9999' ) ).toEqual( {
            href : 'http://[::80]:9999/',
            protocol : 'http:',
            origin : 'http://[::80]:9999',
            username : '',
            password : '',
            hostname : '[::80]',
            host : '[::80]:9999',
            port : '9999',
            pathname : '/',
            search : '',
            hash : ''
        } );
    } );
    
    it( 'is.url false', () => {
        expect( is.url( '://a.b?x=1&y=2#xx' ) ).toBeFalsy();
        expect( is.url( 'www.xx.com' ) ).toBeFalsy();
        expect( is.url( 'http://333.333.333.333' ) ).toBeFalsy();
        expect( is.url( 'http://www.xx.com:23543535' ) ).toBeFalsy();
    } );

} );
