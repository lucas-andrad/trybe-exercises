const assert = require('assert');

// escreva sum abaixo
const sum = (...numbers) => {
  let sum = 0;
  for (number of numbers) {
    sum += number;
  }
  return sum;
};

assert.equal(sum(), 0);
assert.equal(sum(1), 1);
assert.equal(sum(1, 2), 3);
assert.equal(sum(1, 2, 3), 6);
assert.equal(sum(1, 2, 3, 4), 10);
