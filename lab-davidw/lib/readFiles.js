'use strict';

const fs = require('fs');

module.exports = function(files, callback) {
  let hexArray = [];
  fs.readFile(files[0], function(err, data) {
    if(err) callback(err);
    hexArray.push(data.toString('hex', 0, 8));

    fs.readFile(files[1], function(err, data) {
      if(err) callback(err);
      hexArray.push(data.toString('hex', 0, 8));

      fs.readFile(files[2], function(err, data) {
        if(err) callback(err);
        hexArray.push(data.toString('hex', 0, 8));
        console.log('hexArray', hexArray);

        callback(null, hexArray);
      });
    });
  });
};
