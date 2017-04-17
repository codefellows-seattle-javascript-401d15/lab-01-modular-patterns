'use strict';

const assert = require('assert');
const greeting = require('../lib/greeting.js');

describe('greeting.js', function(){
  describe('#greet', function(){
    it('should return Hello Dave, if given Dave', function(){
      assert.equal(greeting.greet(Dave), 'Hello Dave');
    });
    it('should return a string', function(){
      assert.equal(typeof greeting.greet(Dave), 'string');
      assert.notEqual(typeof greeting.greet(Dave), 'number');
    });
  });
});
