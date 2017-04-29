'use strict';

const assert = require('assert');
const nameUtil = require('../lib/namer.js');
const commandSend = require('../greet.js');

//describe module
describe('namer.js', function(){
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

//describe module
describe('greet.js', function(){
  //describe method
  describe('greet()', function(){
    it('should print the greeting and undefined, since we havent passed an argument into function', function(){
      assert.equal(commandSend.greet('Caleb'));
    });
  });
});
