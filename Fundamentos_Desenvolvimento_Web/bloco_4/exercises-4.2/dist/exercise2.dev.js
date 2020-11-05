"use strict";

var numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum = numbers[i] + sum;
}

console.log(sum);