'use strict';

module.exports = exports = {};

exports.greeting = function(name) {
  return `Hello ${name}`;
}

console.log(exports.greeting(process.argv[2]));
