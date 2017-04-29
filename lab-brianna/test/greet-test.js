'use strict';

const assert = require('assert');
const greet = require('../lib/greet.js');


describe('greet', function() {
  describe('#greet.js', function() {
    it('should return hello Tricky Dick when given Tricky Dick', function() {
      assert.equal(greet.greet('Tricky Dick'), 'hello Tricky Dick');
    });
    it('should return a string', function() {
      assert.equal(typeof greet.greet('Tricky Dick'), 'string');
      assert.notEqual(typeof greet.greet('Tricky Dick'), 'number');
    });
  });
});
