"use strict";

var fs = require('fs');

var writeFile = function writeFile(location, data) {
  fs.writeFile(location, JSON.stringify(data), function (err) {
    if (err) {
      console.log(err);
    } else console.log('Files Written.');
  });
};

module.exports = {
  writeFile: writeFile
};