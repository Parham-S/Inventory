"use strict";

var router = require("express").Router();

var warehouse = require("./warehouse");

var inventory = require("./inventory");

router.use("/api/warehouses", warehouse);
router.use("/api/inventory", inventory);
module.exports = router;