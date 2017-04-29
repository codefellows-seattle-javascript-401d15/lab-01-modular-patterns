'use strict';

const assert = require('assert');
const greet = require('../lib/greet.js');

describe('greet.js', function() {
  describe('#say', function() {
    it('should return hello Tom, if given Tom', function() {
      assert.equal(greet.say('Tom'), 'hello Tom');
    });
    it('should return a valid string', function() {
      assert.equal(typeof greet.say('Steve'), 'string');
    });
  });
});
