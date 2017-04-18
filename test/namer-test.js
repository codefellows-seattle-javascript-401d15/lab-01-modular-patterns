'use strict';

const assert = require('assert');
const nameUtil = require('../lib/namer.js');

//describe module
describe('namer.js',function(){
  //describe method
  describe('greet()', function(){
    it('should return the exact name', function(){
      assert.equal(nameUtil.greet('Caleb'), 'Ayyo Caleb!');
    });
    it('should return a string', function(){
      assert.equal(typeof nameUtil.greet('Caleb'), 'string');
    });
  });
});
