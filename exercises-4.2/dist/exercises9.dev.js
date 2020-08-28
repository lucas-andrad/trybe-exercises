"use strict";

var arr = [];
var by2 = [];

for (var _i = 1; _i < 26; _i++) {
  arr.push(_i);
}

for (var _i2 = 0, _arr = arr; _i2 < _arr.length; _i2++) {
  i = _arr[_i2];
  by2.push(i / 2);
}

console.log(by2);