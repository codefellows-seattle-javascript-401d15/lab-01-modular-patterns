'use strict';

console.log('test');

let greeting = require('./greeting.js');

greeting.greet(process.argv[2]);
console.log(process.argv);
console.log(process.argv[2]);
