'use strict';

module.exports = exports = {};

exports.greet = function(name){
  return`Hello ${name}`;
};

console.log(exports.greet(process.argv[2]));
