'use strict';

const greeting = require('../lib/greeting.js');
const assert = require('assert');

describe('greeting.js', function(){
  describe('#greet', function(){
    it('should return Hello Patrick, if given Patrick', function(){
      assert.equal(greeting.greet('Patrick'), 'Hello Patrick');
    });
  });
});
