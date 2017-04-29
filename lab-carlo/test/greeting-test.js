'use strict';

const assert = require('assert');
const greeting = require('../lib/greeting.js');

describe('greeting.js', function() {
  describe('#greet', function() {
    it('should return \'hello Carlo\'', function() {
      assert.equal(greeting.greet('Carlo'), 'hello Carlo');
    });
    it('should return a string', function() {
      assert.equal(typeof greeting.greet('Carlo'), 'string');
    });
  });
});
