'use strict';

module.exports = exports = {};


var param = process.argv[2];

console.log(`hello ${param}`);


exports.greet = function(param){
  return `hello ${param}`;
};
