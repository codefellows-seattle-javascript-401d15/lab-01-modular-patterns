'use strict';

module.exports = exports = {};

// Stretch Goal: typing 'node greeting.js < your name >'
var param = process.argv[2];
console.log(`hello ${param}`);

exports.greet = function(name) {
  return `hello ${name}`;
};
