import isNumber from './number';
import isString from './string';

export default ( n, strict = false ) => {
    if( isNumber( n ) ) {
        return n % 1 === 0;
    }

    if( strict ) return false;

    if( isString( n ) ) {
        return String( parseInt( n ) ) === n;
    }

    return false;
}
