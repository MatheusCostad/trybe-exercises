const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = array => {
  const lengths = [];
  for (const iterator of array) {
    lengths.push(iterator.length);
  }
  return lengths
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);