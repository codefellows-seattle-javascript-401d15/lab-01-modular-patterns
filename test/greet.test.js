'use strict';

const assert = require('assert');
const greet = require('../lib/greet');

const name = 'steven'

describe('greet.js', function(){
  describe('#greet', function(){
    it('is a string', function(){
      assert.equal(typeof greet.greet(name), 'string');
    });
    it('recieves the argument', function(){
      assert.strictEqual(greet.greet(name), 'Hello steven');
    });
  });
});
