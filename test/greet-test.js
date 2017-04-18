'use strict';

const assert = require('assert');
const hello = require('../lib/greet.js');

describe('greet.js', function(){
  describe('greet', function(){
    it('should return a hello enrique, if given enrique', function(){
      assert.equal(hello.greet('enrique'),'hello enrique');
    });
    it('should return a string', function(){
      assert.equal(typeof hello.greet('enrique'),'string');
    });
  });
});
