"use strict";

var fs = require('fs');

var inventoryArray = __dirname + '/../../data/inventories.json';

var template = require('../../helpers/template.js');

var write = require('../../helpers/writeFile');

var check = require('../../helpers/isCheck');

var editInventory = function editInventory(req, res) {
  var id = req.params.id;

  try {
    var bodyTemplate = template.editItem(req.body);

    if (!check.isEmpty(bodyTemplate)) {
      fs.readFile(inventoryArray, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var itemData = JSON.parse(data);
          var itemChange = itemData.find(function (item) {
            return item.id === id;
          });
          Object.assign(itemChange, bodyTemplate);
          write.writeFile(inventoryArray, itemData);
          res.send(itemChange);
        }
      });
    } else res.json('Invalid input');
  } catch (error) {
    console.log(error);
  }
};

module.exports = editInventory;