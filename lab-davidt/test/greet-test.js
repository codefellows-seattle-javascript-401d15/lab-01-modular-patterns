'use strict';

const assert = require('assert');
const greet = require('../lib/greet.js');
var name = 'test';
describe ('greet.js', function(){
  describe('#greet', function(){
    it('should hello David, when name is inputed', function(){
      assert.equal(typeof greet.greet(), 'string');
    });
    it('should not have an empty string', function(){
      assert.notEqual(greet.greet().length, 0);
    });
    it('should not be a number', function(){
      assert.notEqual(greet.greet(), NaN);
    });
    it('should pass in argument ', function(){
      assert.equal(greet.greet(name), 'hello test');
    });
  });
});
