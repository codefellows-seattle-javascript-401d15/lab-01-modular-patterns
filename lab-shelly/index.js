'use strict';

const greeting = require('./lib/greet.js');
console.log(greeting.greet(process.argv[2]));
