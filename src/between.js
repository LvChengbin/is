import isNumber from './number';
import isFunction from './function';
/**
 * to check if a number/letter is between two numbers/letters
 */
export default ( n, lower, upper, mode = 0 ) => {
    if( !isNumber( n ) ) {
        if( !isFunction( n.charCodeAt ) ) return false;
        n = n.charCodeAt( 0 );
        lower = lower.charCodeAt( 0 );
        upper = upper.charCodeAt( 0 );
    }

    if( upper < lower ) return false;

    // closed interval [lower, upper]
    if( mode === 0 ) {
        return n >= lower && n <= upper;
    }

    // open interval (lower, upper)
    if( mode === 1 ) {
        return n > lower && n < upper;
    }

    // half-closed interval [lower, upper)
    if( mode === 2 ) {
        return n >= lower && n < upper;
    }

    // half-closed interval (lower, upper]
    if( mode === 3 ) {
        return n > lower && n <= upper;
    }
}
