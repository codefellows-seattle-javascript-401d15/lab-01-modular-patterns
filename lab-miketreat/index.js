'use strict';

const greeting = require('./lib/greeting.js');

console.log(greeting.greet(process.argv[2]));
