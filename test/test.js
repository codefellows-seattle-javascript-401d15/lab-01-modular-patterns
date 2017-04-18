'use strict';

const assert = require('assert');
const greet = require('./lib.greet.js');
describe('greet.js', function() {
  describe('#greeting', function() {
    it('should return "Hello (name)"', function() {
      assert.equal(greet.greeting('Disa'), 'Hello Disa');
    });
  });
});
