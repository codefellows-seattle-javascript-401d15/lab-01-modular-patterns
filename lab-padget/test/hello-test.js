'use strict';

// console.log('evaluating hello.js');

const assert = require('assert');
const hi = require('../lib/hello.js');

describe('hello.js', function() {
  describe('#greetObject', function() {
    it('should return a string name'),
    function() {
      let name = 'Michael';
      assert.equal(hi.greetObject(name), 'Hello Michael');
    };
  });
});
