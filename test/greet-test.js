'use strict';

const assert = require('assert');

const greet = require('../lib/greet.js');

// var name = 'test';

describe('greet.js', () => {
  describe('#printGreeting', () => {
    it('should return a string', () => {
      assert.equal(typeof greet.greet(), 'string');
    });
    it('should have a length > 0', () => {
      assert.notEqual(greet.greet().length, 0);
    });
    it('should not return NaN', () => {
      assert.notEqual(greet.greet(), NaN);
    });
  });
});
