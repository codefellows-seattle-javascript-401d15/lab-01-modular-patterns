'use strict';

const assert = require('assert');
const greeting = require('../lib/greet.js');

describe('greet.js', function() {
  describe('greet()', function() {
    it('should return a string with Hello plus the userName', function() {
      assert.equal(greeting.greet('Allie'), 'Hello, Allie!');
    });
    it('should be a string', function() {
      assert.equal(typeof greeting.greet(), 'string');
    });
  });
});
