'use strict';

const greet = require('./lib/greet.js');

let name = process.argv[2];
console.log(greet.sayHello(name));
