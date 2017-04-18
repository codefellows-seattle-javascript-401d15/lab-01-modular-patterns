'use strict';

const greetings = require('./lib/greet.js');

console.log(greetings.greet('maria'));
console.log(greetings.greet(process.argv[2]));
