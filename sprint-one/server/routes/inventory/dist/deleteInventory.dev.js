"use strict";

fs = require('fs');

var write = require('../../helpers/writeFile');

var inventory = __dirname + '/../../data/inventories.json';

var deleteInventory = function deleteInventory(req, res) {
  fs.readFile(inventory, function (err, data) {
    var newArray = JSON.parse(data);
    var del = newArray.filter(function (item) {
      return item.id !== req.params.id;
    });
    write.writeFile(inventory, del);
    res.json(del);
  });
};

module.exports = deleteInventory;