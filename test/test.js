'use strict';

const hi = require('../lib/lib.js');
const assert = require('assert');

describe('module', function(){
  describe('greet', function(){
    it('should say Hello + name', function(){
      assert.equal(hi.greet('Isak'), 'Hello Isak');
    })
  })
})
