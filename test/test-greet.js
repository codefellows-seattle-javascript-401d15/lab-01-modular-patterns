'use strict';

const expect = require('chai').expect;

let greetings = require('../lib/greet.js');

describe('greetings', function(){
  it('should exist', function(){
    expect(greetings).to.not.be.undefined;
  });
  it('should return a string', function(){
    expect(greetings.greet('maria')).to.be.a('string');
  });
  it('should concatinate hello with name input', function(){
    expect(greetings.greet('scott')).to.equal('hello scott');
  });
});

const assert = require('assert');

describe('greet.js', function(){
  describe('greet()', function(){
    it('should return a string', function(){
      assert.equal(typeof greetings.greet(), 'string');
    });
    it('should return hello maria when passed maria', function(){
      assert.equal(greetings.greet('maria'), 'hello maria');
    });
  });
});
