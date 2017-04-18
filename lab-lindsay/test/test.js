'use strict';

const assert = require('assert');
const greet = require('./lib/greet.js');

describe('greet.js', function() {
  describe('#greetName', function() {
    it('should return hello lindsay if lindsay is assigned to name', function() {
      assert.equal(greet.greetName('lindsay'), 'hello lindsay');
    });
    it('should return a valid string', function() {
      assert.equal(typeof greet.greetName('lindsay'), 'string');
    });
  });
});
