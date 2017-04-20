'use strict';

const fs = require('fs');

let hexArray = [];

module.exports = function(callback) {
  fs.readFile(`${__dirname}../data/one.txt`, function(err, data) {
    if(err) throw err;
    hexArray.push(data.toString('hex', 0, 8));
    fs.readFile(`${__dirname}/../data/two.txt`, function(err, data) {
      if(err) throw err;
      hexArray.push(data.toString('hex', 0, 8));
      fs.readFile(`${__dirname}../data/three.txt`, function(err, data) {
        if(err) throw err;
        hexArray.push(data.toString('hex', 0, 8));
        callback(hexArray);
      });
    });
  });
};
