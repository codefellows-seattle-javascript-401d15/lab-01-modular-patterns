'use strict';
// const param = require('../greet.js');
const hi = require('../lib/lib.js');
const assert = require('assert');



describe('module', function(){
  describe('greet', function(){
    it('should say Hello + name', function(){
      assert.equal(hi.greet('Isak'), 'Hello ' + 'Isak');
    });
    it('should be a string', function(){
      assert.equal(typeof hi.greet('Isak'), 'string');
    });
    it('should not have any number values', function(){
      assert.notEqual(hi.greet('Isak'), 'number');
    });
    it('should not have any boolean values', function(){
      assert.notEqual(hi.greet('Isak'), 'boolean');
    });
    it('should have at least one character for the name', function(){
      assert.notEqual(hi.greet('Isak').length, 0);
    });
  });
});

describe('module', function(){
  describe('name', function(){
    it('Should be a string', function(){
      assert.equal(typeof exports.name, 'string');
    });
    it('Should not contain a number', function(){
      assert.notEqual(exports.name, 'number');
    });
  });
});
