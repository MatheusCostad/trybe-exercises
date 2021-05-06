
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const concArrays = (accArray, curArray) => accArray.concat(curArray);
  return arrays.reduce(concArrays, []);
}

console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);