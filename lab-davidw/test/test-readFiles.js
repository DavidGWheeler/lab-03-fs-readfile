'use strict';

const expect = require('chai').expect;
const eatFiles = require('../lib/readFiles.js');
console.log(eatFiles);


describe('readFile()', function() {
  var mockDataPaths = [`${__dirname}/../data/one.txt`, `${__dirname}/../data/two.txt`, `${__dirname}/../data/three.txt`];
  it('should return hex value for one.txt', done => {
    var mockOutput = ['4865726527732061', '57686f2077617320', '54696c6c20746865'];
    eatFiles(mockDataPaths, function(err, data) {
      if (err) throw err;
      console.log('mockDataPaths', mockDataPaths);
      console.log('data', data);
      expect(data[0].toString('hex', 0, 8)).equal(mockOutput[0]);
      done();
    });
  });
});
