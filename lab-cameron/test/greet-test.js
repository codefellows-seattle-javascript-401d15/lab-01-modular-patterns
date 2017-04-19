'use strict';

const assert = require('assert');
const greeting = require('../lib/greeting.js');

// command line parameter
{process.argv[2] = 'Cameron';}

(function() {
  if (process.argv[2]) {
    // greeting.greet(process.argv[2]);
    describe('greeting.js', function() {
      describe('.greet()', function() {
        it(`it should say \'hello ${process.argv[2]}\'`, function() {
          assert.equal(greeting.greet(process.argv[2]), `hello ${process.argv[2]}`);
        });
        it('should return a valid string', function() {
          assert.equal(typeof greeting.greet(process.argv[2]), 'string');
        });
      });
    });
  }
})();

// describe('greeting.js', function() {
//   describe('.greet()', function() {
//     it(`it should say \'hello ${process.argv[2]}\'`, function() {
//       assert.equal(greeting.greet(process.argv[2]), `hello ${process.argv[2]}`);
//     });
//     it('should return a valid string', function() {
//       assert.equal(typeof greeting.greet(process.argv[2]), 'string');
//     });
//   });
// });
