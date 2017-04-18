'use strict';

const assert = require('assert');
const greeting = require('../script/lib/app.js')

describe('app.js', function() {
  describe('#greet', function() {
    it('should return Hello Kayla', function() {
      assert.equal(greeting.greet('Kayla'), 'Hello Kayla')
    })
  })
})
