'use strict';

module.exports = exports = {};

// Stretch Goal: typing 'node greeting.js < your name >'
var param = process.argv[2];

exports.greet = function(name) {
  return `hello ${name}`;
};
