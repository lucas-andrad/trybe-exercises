const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
    lst = []
    for (let i=0; i < words.length; i++){
        lst.push(words[i].split('').length)
    }
    return lst
}


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);