'use strict';

const greet = require('./lib/greet');
// const argv = require('argv');
// const args = argv.options(options).run();
console.log(greet.greet(process.argv[2]));
