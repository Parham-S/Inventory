"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isEmpty = function isEmpty(obj) {
  for (var key in obj) {
    if (obj[key] === '') {
      return true;
    }
  }

  return false;
};

var _default = isEmpty;
exports["default"] = _default;