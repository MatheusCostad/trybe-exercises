const {obj1, obj2, obj3} = require('./identical');

test('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
  expect(obj1).toEqual(obj2);
  expect(obj1).toEqual(obj3);
  expect(obj2).toEqual(obj3);
});