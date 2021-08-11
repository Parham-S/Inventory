"use strict";

fs = require('fs');

var data = require('../../data/warehouses.json');

var warehouseList = function warehouseList(req, res) {
  try {
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = warehouseList;