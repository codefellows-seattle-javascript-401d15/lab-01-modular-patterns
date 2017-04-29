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

describe('array values or argv', function(){
  it('index zero should be the path to js file that is executing', function(){
    expect(process.argv[1]).to.equal(`/home/meklr/education/codefellows/401/1stDayTDD/lab-01-modular-patterns/node_modules/mocha/bin/_mocha`);
  });
  it('should add items to the argv array', function(){
    process.argv = process.argv.concat(['maria', 'scott', 'j.r']);
    expect(process.argv.length).to.equal(5);
  });
  it('should actually be an array', function(){
    expect(process.argv).to.be.a('array');
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
