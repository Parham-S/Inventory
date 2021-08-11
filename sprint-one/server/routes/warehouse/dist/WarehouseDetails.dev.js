"use strict";

fs = require("fs");
var warehouseArray = __dirname + "/../../data/warehouses.json";
var inventoryArray = __dirname + "/../../data/inventories.json";

var warehouseDetails = function warehouseDetails(req, res) {
  var id = req.params.id;
  fs.readFile(warehouseArray, function (error, data) {
    if (error) {
      console.log(error);
    } else {
      var warehouseData = JSON.parse(data);
      var warehouse = warehouseData.find(function (warehouse) {
        return warehouse.id === id;
      });
      fs.readFile(inventoryArray, function (error, data) {
        if (error) {
          console.log(error);
        } else {
          var invetoryData = JSON.parse(data);
          var warehouseInventory = invetoryData.filter(function (item) {
            return item.warehouseID === id;
          });
          res.json({
            warehouse: warehouse,
            warehouseInventory: warehouseInventory
          });
        }
      });
    }
  });
};

module.exports = warehouseDetails;