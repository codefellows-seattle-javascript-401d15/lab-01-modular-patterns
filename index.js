'use strict';

const greetings = require('./lib/greet.js');

console.log(greetings.greet(process.argv[2]));
console.log(process.argv[1]);
