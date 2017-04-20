'use strict';

const eatFiles = require('../lib/readFiles.js');
const expect = require('chai').expect;
const fs = require('fs');

describe('readFile()', function() {
  it('should return hex value for one.txt', done => {
    eatFiles(`${__dirname}../data/one.txt`, function(err, data) {
      console.log(eatFiles);
      done();
    });
  });
});
