"use strict";

var numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var isEven = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    isEven += 1;
  }
}

console.log("Existem ".concat(isEven, " valores pares no array"));