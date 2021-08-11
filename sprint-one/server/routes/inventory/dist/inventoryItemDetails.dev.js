"use strict";

var fs = require("fs");

var inventoryItemsLocation = __dirname + "/../../data/inventories.json";

var inventoryItemDetails = function inventoryItemDetails(req, res) {
  var id = req.params.id;
  fs.readFile(inventoryItemsLocation, function (error, data) {
    if (error) {
      console.log(error);
    } else {
      var inventoryItemData = JSON.parse(data);
      var requestedItem = inventoryItemData.find(function (inventoryItem) {
        return inventoryItem.id === id;
      });
      res.json(requestedItem);
    }
  });
};

module.exports = inventoryItemDetails;