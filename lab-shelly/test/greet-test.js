'use strict';

const assert = require('assert');
const greeting = require('../lib/greet.js');

describe('greet.js', function() {
  describe('#greet', function(){
    it('should return hello with name', function(){
      assert.equal(greeting.greet('shelly'), 'hello shelly' );
    });
  });
});
