'use strict';

const assert = require('assert');
const greeting = require('../lib/greeting.js');

describe('greeting.js', function() {
  describe('#greet', function() {
    it('should say \'hello Cameron\'', function() {
      assert.equal(greeting.greet(process.argv[2]), 'hello Cameron')
    });
    it('should return a valid string', function() {
      assert.equal(typeof greeting.greet(process.argv[2]), 'string')
    });
  });
});
