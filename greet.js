'use strict';

const nameUtil = require('./lib/namer.js');

module.exports = exports = {};

//process.argv is an array, hence why we use the index of the array later
// process.argv.map(function(val, array, index){
//   nameUtil.greet(val);
//   // console.log(nameUtil.greet(val));
// });
exports.greet = function(){
  console.log(nameUtil.greet(process.argv[2]));
};

exports.greet();
