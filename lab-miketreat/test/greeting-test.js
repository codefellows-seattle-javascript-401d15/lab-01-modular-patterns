'use strict';

const greeting = require('../lib/greeting.js');
const assert = require('assert');


// This test will check if a specific value is being passed through process.argv[2]
describe('greeting.js', function(){
  describe('#greet', function(){
    it('This should be Mike if Mike is passed into the console as an arguement', function(){
      process.argv[2] = 'Mike';
      assert.equal(greeting.greet(process.argv[2]), 'Hello Mike');
    });
  });
});

// This test will check if a specific argument is passed into the terminal and fail if anything else is entered. This can be used to make sure that the correct args are being passed, captured, and used.
describe('greeting.js', function (){
  describe('#greet', function(){
    it('This value should be typeof String.', function(){
      assert.equal(typeof process.argv[2], 'string');
    });
  });
});
