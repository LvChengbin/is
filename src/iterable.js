import isFunction from './function';

const support = ( () => {
    try {
        return !!Symbol.iterator;
    } catch( e ) {
        return false;
    }
} )();

export default obj => {
    if( !obj || !support ) return false;
    return isFunction( obj[ Symbol.iterator ] );
};
