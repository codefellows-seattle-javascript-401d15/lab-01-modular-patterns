'use strict';

const assert = require('assert');

const greet = require('../lib/greet.js');

describe('greet.js', function() {
  describe('#printGreeting', function() {
    it('should return a string', function() {
      assert.equal(typeof greet.greet(), 'string');
    });
    var name = 'David';
    it('should have a length > 0', function() {
      assert.notEqual(greet.greet(name).length, 0);
    });
  });
});
