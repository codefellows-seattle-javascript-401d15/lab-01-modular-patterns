'use strict';

const assert = require('assert');
const greet = require('../script/lib/greet.js');

//test for greet module
describe('greet.js', function(){
  describe('greeting()', function(){
    it('should return a log', function(){
      assert.equal(greet.greeting('Chris'), 'Greetings! Chris');
    });
  });
});
