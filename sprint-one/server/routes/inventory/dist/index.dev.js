"use strict";

var router = require('express').Router();

var deleteInventory = require('./deleteInventory');

var inventoryFunctionExample = require('./deleteInventory');

var addInventory = require('./addInventory');

var inventoryList = require('./inventoryList');

var editInventory = require('./editInventory');

var inventoryItemDetails = require('./inventoryItemDetails');

router.get('/list', inventoryList);
router.get('/:id', inventoryItemDetails);
router.get('/', inventoryFunctionExample);
router.post('/', addInventory);
router.put('/:id', editInventory);
router["delete"]('/:id', deleteInventory);
module.exports = router;