const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo

const swap = ([first, second, third] = list) =>
  ([first, second, third] = [third, second, first]);
const swappedList = swap(myList);

assert.equal(swappedList[0], 3);
assert.equal(swappedList[1], 2);
assert.equal(swappedList[2], 1);
