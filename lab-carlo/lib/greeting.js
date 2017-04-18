'use strict';

module.exports = exports = {};

//bonus one
var user = process.argv[2];
console.log(`hello ${user}`);

exports.greet = function(name) {
  return `hello ${name}`;
};
