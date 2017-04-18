'use strict';
const nameUtil = require('./lib/namer.js');

// process.argv.map(function(val){
//   // nameUtil.greet(val);
//   console.log(nameUtil.greet(val));
// });


process.on(function(val){
  // nameUtil.greet(val);
  console.log(nameUtil.greet(val));
});

// process.send(function(val){
//   nameUtil.greet(val);
// });
