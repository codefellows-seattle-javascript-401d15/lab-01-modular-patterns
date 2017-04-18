'use strict';

module.exports = exports = {};

//function to greet
exports.greeting = function(name){
  if(name === undefined){ name = process.argv[2];}
  return('Greetings! ' + name);
};
