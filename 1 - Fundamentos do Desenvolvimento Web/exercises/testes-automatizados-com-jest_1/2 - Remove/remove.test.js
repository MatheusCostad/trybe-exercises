const myRemove = require('./remove');

describe('remove', () => {
  test('Return object', () => {
    expect(typeof myRemove().length).toMatch(/number/);
  });

  test('Return correct array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Return false array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  test('Returns the correct array when the second parameter does not exist in the test array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);    
  })
});