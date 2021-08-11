"use strict";

var express = require("express");

var routes = require("./routes");

var PORT = 5050;
var app = express();

var morgan = require("morgan");

morgan("dev");
app.use(express.json());
app.use("/", routes);
app.listen(PORT, function () {
  console.log("Listening on port ".concat(PORT));
});