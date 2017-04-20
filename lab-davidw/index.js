'use strict';



const readFiles = require('./lib/readFiles.js');
let dataPaths = [`${__dirname}/data/one.txt`, `${__dirname}/data/two.txt`, `${__dirname}/data/three.txt`];

readFiles(dataPaths, function(err, data) {
  if(err) throw err;
  console.log('index', data);
});
