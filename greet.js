'use strict';

module.exports = exports = {};
console.log('Hello ' + process.argv[2]);
exports.name = process.argv[2];
console.log('Howdy ' + exports.name);
const assert = require('assert');



// describe('module', function(){
//   describe('greet', function(){
//     it('should say Hello + name', function(){
//       assert.equal(exports.name), 'Hello ' + exports.name);
//     });
//     it('should be a string', function(){
//       assert.equal(typeof exports.name), 'string');
//     });
//     it('should not have any number values', function(){
//       assert.notEqual(exports.name), 'number');
//     });
//     it('should not have any boolean values', function(){
//       assert.notEqual(exports.name), 'boolean');
//     });
//     it('should have at least one character for the name', function(){
//       assert.notEqual(exports.name).length, 0);
//     });
//   });
// });
