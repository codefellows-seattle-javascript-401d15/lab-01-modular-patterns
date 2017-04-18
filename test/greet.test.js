'use strict';

const assert = require('assert');
const greet = require('../lib/greet');

describe('greet.js', function(){
  describe('#greet', function(){
    it('is a string', function(){
      assert.equal(typeof greet.greet('steven'), 'string');
    });
  });
});
