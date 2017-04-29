'use strict';

module.exports = exports = {};


exports.say = function(name) {
  return `hello ${name}`;
};

if(process.argv[2]) {
  console.log(exports.say(process.argv[2]));
}
