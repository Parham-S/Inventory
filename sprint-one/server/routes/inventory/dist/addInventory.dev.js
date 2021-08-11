"use strict";

var fs = require('fs');

var _require = require('tls'),
    checkServerIdentity = _require.checkServerIdentity;

var template = require('../../helpers/template');

var write = require('../../helpers/writeFile');

var inventoryLocation = __dirname + '/../../data/inventories.json';

var check = require('../../helpers/isCheck');

var addInventory = function addInventory(req, res) {
  try {
    var templatedBody = template.inventory(req.body);

    if (!check.isEmpty(req.body)) {
      fs.readFile(inventoryLocation, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var inventoryData = JSON.parse(data);
          inventoryData.push(templatedBody);
          write.writeFile(inventoryLocation, inventoryData);
          res.send(templatedBody);
        }
      });
    } else res.json('Invalid input');
  } catch (err) {
    console.log(err);
  }
};

module.exports = addInventory;