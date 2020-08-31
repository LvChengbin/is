# Is

Checking...

## Installing

```js
npm i @lvchengbin/is --save
```

<<<<<<< HEAD
## Methods

| Method | Desc |
| :----- | :--- |
| is.arguments | |
| is.array | |
| is.arrayBuffer | |
| is.arrayBufferView | |
| is.arrowFunction ||
| is.asyncFunction ||
| is.between ||
| is.blob ||
| is.boolean ||
| is.class ||
| is.darkMode ||
| is.dataview ||
| is.date ||
| is.elementNode ||
| is.email ||
| is.empty || 
| is.error ||
| is.formdata ||
| is.fragmentNode ||
| is.function ||
| is.generalizedFalse ||
| is.generalizedTrue ||
| is.generator ||
| is.integer ||
| is.ip ||
| is.ipv4 ||
| is.ipv6 ||
| is.iterable ||
| is.leapYear ||
| is.map ||
| is.node ||
| is.number ||
| is.object ||
| is.oneDimensionalArray ||
| is.plainObject ||
| is.privateIPv4 ||
| is.promise ||
| is.regexp ||
| is.set ||
| is.string ||
| is.textNode ||
| is.undefined ||
| is.url ||
| is.window ||
=======
```js
yarn add @lvchengbin/is
```

## Usage

Generally, when we are using some toolkit such as rollup, we don't want to compile a huge library into our project, therefore, to import the files you really need.

```js
const is = require( '@lvchengbin/is' );

is.function( async () => {} );
is.array( [] );
```
## Using in browsers

If you want to invoke this package to browsers with `<script>` tag or something like that, use [is.js](https://raw.githubusercontent.com/LvChengbin/is/master/dist/is.js). For old browsers which are not supporting ES5 syntax, use [is.bc.js](https://raw.githubusercontent.com/LvChengbin/is/master/dist/is.bc.js).

## Method List

| Method | Importing |
|:--|:--|
| is.arguments | import isArguments from '@lvchengbin/is/src/arguments' |
| is.array | import isArray from '@lvchengbin/is/src/array' |
| is.arrowFunction | import isArrowFunction from '@lvchengbin/is/src/arrow-function' |
| is.asyncFunction | import isAsyncFunction from '@lvchengbin/is/src/async-function' |
| is.between | import isBetween from '@lvchengbin/is/src/between' |
| is.boolean | import isBoolean from '@lvchengbin/is/src/boolean' |
| is.class | import isClass from '@lvchengbin/is/src/class' |
| is.date | import isDate from '@lvchengbin/is/src/date' |
| is.elementNode | import isElementNode from '@lvchengbin/is/src/element-node' |
| is.email | import isEmail from '@lvchengbin/is/src/email' |
| is.empty | import isEmpty from '@lvchengbin/is/src/empty' | 
| is.error | import isError from '@lvchengbin/is/src/error' |
| is.false | import isFalse from '@lvchengbin/is/src/false' |
| is.fragmentNode | import isFragmentNode from '@lvchengbin/is/src/fragment-node' |
| is.function | import isFunction from '@lvchengbin/is/src/function' |
| is.generator | import isGenerator from '@lvchengbin/is/src/generator' |
| is.integer | import isInteger from '@lvchengbin/is/src/integer' |
| is.ip | import isIP from '@lvchengbin/is/src/ip' |
| is.ipv4 | import isIPv4 from '@lvchengbin/is/src/ipv4' |
| is.ipv6 | import isIPv6 from '@lvchengbin/is/src/ipv6' |
| is.iterable | import isIterable from '@lvchengbin/is/src/iterable' |
| is.leapYear | import isLeapYear from '@lvchengbin/is/src/leap-year' |
| is.map | import isMap from '@lvchengbin/is/src/map' |
| is.node | import isNode from '@lvchengbin/is/src/node' |
| is.number | import isNumber from '@lvchengbin/is/src/number' |
| is.object | import isObject from '@lvchengbin/is/src/object' |
| is.oneDimensionalArray | import isOneDimensionalArray from '@lvchengbin/is/src/one-dimensional-array' |
| is.plainObject | import isPlainObject from '@lvchengbin/is/src/plain-object' |
| is.promise | import isPromise from '@lvchengbin/is/src/promise' |
| is.regexp | import isRegexp from '@lvchengbin/is/src/regexp' |
| is.set | import isSet from '@lvchengbin/is/src/set' |
| is.string | import isString from '@lvchengbin/is/src/string' |
| is.true | import isTrue from '@lvchengbin/is/src/true' |
| is.undefined | import isUndefined from '@lvchengbin/is/src/undefined' |
| is.url | import isUrl from '@lvchengbin/is/src/url' |
| is.textNode | import isTextNode from '@lvchengbin/is/src/text-node' |
| is.window | import isWindow from '@lvchengbin/is/src/window' |
>>>>>>> x
