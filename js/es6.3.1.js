'use strict';

(function () {

// babel polyfil for new methods
// npm install --save-dev babel-polyfill
// ref node_modules/polyfill in index
// no need to transpile with polyfill - so use js/es6.js in index
// new static method fromCodePoint()

var testString = 'test string';

// new instance methods
console.log(testString.startsWith('test')); // true
// second param is index of start 0
console.log(testString.startsWith('test', 1)); // false


console.log(testString.endsWith('string'));  // true
// second param is index of last char length
console.log(testString.endsWith('string', testString.length -1)); // false

console.log(testString.includes('str'));
// position to start searching from
console.log(testString.includes('str', 9));

console.log(testString.repeat(3));

}());