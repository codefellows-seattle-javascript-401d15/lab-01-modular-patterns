'use strict';

const assert = require('assert');
const greet = require('../lib/greet.js');

describe('greet.js', function() {
  describe('#sayHello', function() {
    it('should return a string that greets the user by his or her name', function() {
      assert.equal(greet.sayHello('Tommy'), 'Hello, Tommy!');
    });
    it('should return a string', function() {
      assert.equal(typeof greet.sayHello('Jimmy'), 'string');
    });
    it('should process user input from the command line', function() {
      assert.equal(greet.sayHello(process.argv[2]), `Hello, ${process.argv[2]}!`);
    });
  })
})
