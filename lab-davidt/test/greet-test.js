'use strict';

const assert = require('assert');
const greet = require('../lib/greet.js');

describe ('greet.js', function(){
  describe('#greet', function(){
    it('should show a name, when name is inputed', function(){
      assert.equal(typeof greet.greet(), 'string')
    })
  })
})
