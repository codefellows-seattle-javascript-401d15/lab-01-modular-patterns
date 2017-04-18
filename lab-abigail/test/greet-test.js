'use strict';

const assert = require('assert');
const greeting = require('../lib/greet.js');


describe('greet.js', function() {
  describe('#greet', function() {
    it('should return, hello Abigail', function() {
      assert.equal(greeting.greet('Abigail'), 'hello Abigail');
    });
    it('should return a string', function() {
      assert.equal(typeof greeting.greet('Abigail'), 'string');
    });
    it('should return a string', function() {
      assert.equal(greeting.greet(process.argv[2]), `hello ${process.argv[2]}`);
    });
  });
});
