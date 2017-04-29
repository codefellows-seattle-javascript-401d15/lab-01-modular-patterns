'use strict';

const assert = require('assert');
const greet = require('../lib/greet.js');
let userName = 'glen';
let reverse = 'nelg';

describe('greet.js', function() {
  before(function() {
    console.log('This function should run BEFORE each describe block');
  });
  after(function() {
    console.log('This function should run AFTER every describe block');
  });
  beforeEach(function(done) {
    this.timeout(500);
    setTimeout(done, 0);
  });
  describe('greeting', function ()  {
    it('should return a name', function () {
      assert.equal(greet.greeting(userName), 'hello glen');
    });
    it('should return a string, no numbers', function () {
      assert.equal(typeof greet.greeting(userName), 'string');
    });
    it('should not return an empty string', function () {
      assert.notEqual(greet.greeting(userName), 'glen');
    });
  });
  describe('reverseString', function ()  {
    it('should reverse a string', function () {
      assert.deepEqual(greet.reverseString(reverse), 'glen');
    });
  });
});
