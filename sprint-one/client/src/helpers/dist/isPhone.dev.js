"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

var isPhone = function isPhone(subjectString) {
  if (phoneRegex.test(subjectString)) {
    return true;
  } else return false;
};

var _default = isPhone;
exports["default"] = _default;