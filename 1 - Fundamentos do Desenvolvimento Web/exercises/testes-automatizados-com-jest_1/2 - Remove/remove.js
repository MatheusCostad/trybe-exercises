// const assert = require('assert');

function myRemove(arr = [], item) {
  const newArr = arr.reduce(((acc, cur) => {
    (item !== cur) ? acc.push(cur) : acc;
    return acc
  }), [])

  return newArr;
}

console.log(typeof myRemove().length);

// implemente seus testes aqui

// assert.strictEqual(typeof myRemove(), 'object');
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

module.exports = myRemove;