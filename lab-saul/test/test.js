'use strict';

const assert = require('assert');
const greet = require('../lib/greet.js');

describe('greet.js', function(){
  describe('#hello', function(){
    it('should return hello saul, if given saul', function() {
      assert.equal(greet.hello('saul'), 'hello saul');
    });
    it('should return a valid string', function() {
      assert.equal(typeof greet.hello('saul'), 'string');
    });
  });
});
