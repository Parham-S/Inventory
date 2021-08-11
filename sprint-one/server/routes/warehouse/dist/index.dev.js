"use strict";

var router = require('express').Router();

var addWarehouse = require('./addWarehouse');

var WarehouseDetails = require('./WarehouseDetails');

var warehouseList = require('./warehouseList');

var editWarehouse = require('./editWarehouse');

var deleteWarehouse = require('./deleteWarehouse');

router.get('/list/all', warehouseList);
router.get('/:id', WarehouseDetails);
router.post('/', addWarehouse);
router.put('/:id', editWarehouse);
router["delete"]('/:id', deleteWarehouse);
module.exports = router;