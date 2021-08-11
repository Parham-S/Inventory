"use strict";

var fs = require('fs');

var data = require('../../data/warehouses.json');

var wareHousesLocation = __dirname + '/../../data/warehouses.json';

var write = require('../../helpers/writeFile');

var deleteWarehouse = function deleteWarehouse(req, res) {
  try {
    fs.readFile(wareHousesLocation, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        var warehouseData = JSON.parse(data);
        var del = warehouseData.filter(function (warehouse) {
          return warehouse.id !== req.params.id;
        });
        write.writeFile(wareHousesLocation, del);
        res.json(del);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteWarehouse;