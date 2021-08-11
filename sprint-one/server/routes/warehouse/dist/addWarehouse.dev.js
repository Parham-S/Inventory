"use strict";

var fs = require('fs');

var template = require('../../helpers/template');

var write = require('../../helpers/writeFile');

var check = require('../../helpers/isCheck');

var wareHousesLocation = __dirname + '/../../data/warehouses.json';

var validator = require('validator');

var addWarehouse = function addWarehouse(req, res) {
  try {
    var templatedBody = template.warehouse(req.body);

    if (!check.isEmpty(req.body) && validator.isMobilePhone(req.body.phone + '') && validator.isEmail(req.body.email + '')) {
      fs.readFile(wareHousesLocation, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          var warehouseData = JSON.parse(data);
          warehouseData.push(templatedBody);
          write.writeFile(wareHousesLocation, warehouseData);
          res.send(templatedBody);
        }
      });
    } else res.json('Invalid input');
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = addWarehouse;