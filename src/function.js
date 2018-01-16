import isAsyncFunction from './async-function';

export default fn => ({}).toString.call( fn ).toLowerCase() === '[object function]' || isAsyncFunction;
