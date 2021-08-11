"use strict";

var uniqid = require('uniqid');

var id = uniqid();

var warehouse = function warehouse(object) {
  return {
    id: id,
    name: object.name,
    address: object.address,
    city: object.city,
    country: object.country,
    contact: {
      name: object.cname,
      position: object.position,
      phone: object.phone,
      email: object.email
    }
  };
};

var editWarehouse = function editWarehouse(object) {
  return {
    name: object.name,
    address: object.address,
    city: object.city,
    country: object.country,
    contact: {
      name: object.cname,
      position: object.position,
      phone: object.phone,
      email: object.email
    }
  };
};

var inventory = function inventory(obj) {
  return {
    id: id,
    warehouseID: obj.warehouseID,
    warehouseName: obj.warehouseName,
    itemName: obj.itemName,
    description: obj.description,
    category: obj.category,
    status: obj.status,
    quantity: obj.quantity
  };
};

var editItem = function editItem(object) {
  return {
    itemName: object.itemName,
    description: object.description,
    category: object.category,
    status: object.status,
    warehouse: object.warehouse,
    quantity: object.quantity || 0
  };
};

module.exports = {
  warehouse: warehouse,
  editWarehouse: editWarehouse,
  inventory: inventory,
  editItem: editItem
};