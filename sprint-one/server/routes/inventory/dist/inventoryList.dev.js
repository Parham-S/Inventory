"use strict";

fs = require('fs');

var data = require('../../data/inventories.json');

var inventoryList = function inventoryList(req, res) {
  try {
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = inventoryList;