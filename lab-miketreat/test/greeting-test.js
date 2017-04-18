'use strict';

const greeting = require('../lib/greeting.js');
const assert = require('assert');


// For passing args during testing, use npm run test test <name> where <name> is the arguement you want to pass into the greet function.

// This test will check if the value of process.argv is undefined and fail if it is.
describe('greeting.js', function(){
  describe('#greet', function(){
    it('Success = defined, Fails = undefined. process.argv[3]. This succeeds if the value is defined and it fails if it is undefined.', function(){
      console.log(`This is the current value of what is being passed into greeting.greet: ${process.argv[3]}`);
      assert.notEqual(greeting.greet(process.argv[3]), 'Hello undefined');
    });
  });
});

// This test will check if a specific argument is passed into the terminal and fail if anything else is entered. This can be used to make sure that the correct args are being passed, captured, and used.
describe('process.argv[3]', function (){
  it('This should be Mike if Mike is passed into the console as an arguement after npm test test Mike', function(){
    assert.equal(process.argv[3], 'Mike');
  });
});
