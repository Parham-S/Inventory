"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axiosGetWarehouse = exports.axiosGetInventory = exports.axiosPost = exports.axiosPut = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var axiosPut = function axiosPut(url, obj) {
  return regeneratorRuntime.async(function axiosPut$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].put(url, obj));

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

exports.axiosPut = axiosPut;

var axiosPost = function axiosPost(url, obj) {
  return regeneratorRuntime.async(function axiosPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(url, obj));

        case 3:
          _context2.next = 8;
          break;

        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

exports.axiosPost = axiosPost;

var axiosGetInventory = function axiosGetInventory(url, setState) {
  var res;
  return regeneratorRuntime.async(function axiosGetInventory$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(url));

        case 3:
          res = _context3.sent;
          setState(res.data);
          console.log(res.data);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.axiosGetInventory = axiosGetInventory;

var axiosGetWarehouse = function axiosGetWarehouse(url, setState) {
  var res;
  return regeneratorRuntime.async(function axiosGetWarehouse$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(url));

        case 3:
          res = _context4.sent;
          setState(res.data.warehouse);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.axiosGetWarehouse = axiosGetWarehouse;