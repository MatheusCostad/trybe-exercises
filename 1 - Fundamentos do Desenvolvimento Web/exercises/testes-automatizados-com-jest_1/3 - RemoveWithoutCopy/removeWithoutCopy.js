// const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  arr.forEach((element, index) => {
    if (element === item) {
      arr.splice(index, 1);
    }
  });
  return arr;
}

// implemente seus testes aqui
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

module.exports = myRemoveWithoutCopy;