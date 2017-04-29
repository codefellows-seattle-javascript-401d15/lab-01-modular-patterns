'use strict';

module.exports = exports = {};

exports.greet = function (name){
  return `Hello ${name}`;
};
console.log(process.argv);
console.log('This is a simple output from greeting.js to show the result of exports.greet(process.argv[2]) NOTE* If this is running during the test then the following result should say "test" :', exports.greet(process.argv[2]));
