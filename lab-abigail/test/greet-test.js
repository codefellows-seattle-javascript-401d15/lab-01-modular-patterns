'use strict';

const assert = require('assert');
const greeting = require('../lib/greet.js');

describe('greet.js', function() {
  describe('#greet', function() {
    it('should return, hello Abigail', function() {
      assert.equal(greeting.greet('Abigail'), 'hello Abigail');
    });
  });
});
