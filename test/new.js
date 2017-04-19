'use strict';

const assert = require('assert');


function printName(name) {

  try {
    if(!name) throw new Error('name is required')
    console.log(`hello ${name}`)
  } catch(err) {
    console.error(err)
  }
}

printName(process.argv[2])
