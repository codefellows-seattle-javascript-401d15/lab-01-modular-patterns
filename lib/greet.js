

'use strict';

module.exports = exports = {};

exports.greeting = name => {
  return 'hello ' + `${name}`;
};

exports.reverseString = arr => {
  return arr.split('').reverse().join('');
};


let param = process.argv[2];
console.log('Your name is: ' + param);
