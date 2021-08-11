"use strict";

var fs = require('fs');

var wareHousesLocation = __dirname + '/../../data/warehouses.json';

var template = require('../../helpers/template.js');

var write = require('../../helpers/writeFile');

var check = require('../../helpers/isCheck');

var validator = require('validator');

var editWarehouse = function editWarehouse(req, res) {
  try {
    var templatedBody = template.editWarehouse(req.body);

    if (!check.isEmpty(req.body) && check.isPhone(req.body.phone) && validator.isEmail(req.body.email + '')) {
      fs.readFile(wareHousesLocation, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var warehouseData = JSON.parse(data);
          var foundWarehouse = warehouseData.find(function (warehouse) {
            return warehouse.id == req.params.id;
          });
          console.log(foundWarehouse);
          Object.assign(foundWarehouse, templatedBody);
          write.writeFile(wareHousesLocation, warehouseData);
          res.send(foundWarehouse);
        }
      });
    } else res.json('Invalid input');
  } catch (error) {
    console.log(error);
  }
};

module.exports = editWarehouse;