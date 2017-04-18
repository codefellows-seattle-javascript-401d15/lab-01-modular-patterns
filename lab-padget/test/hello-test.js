'use strict';

console.log('evaluating hello.js');

const assert = require('assert');
const hi = require('../lib/hello.js');
let name = 'Michael';

describe('hello.js', function() {
  describe('#greetObject', function() {
    it('should return a string with greeting and name', function() {
      assert.equal(hi.greetObject(name), 'Hello Michael');
    });
    it('should return a string', function() {
      assert.equal(typeof hi.greetObject(name), 'string');
    });
  });
});
