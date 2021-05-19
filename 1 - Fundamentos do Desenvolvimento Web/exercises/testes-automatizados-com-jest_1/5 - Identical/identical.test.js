const obj1 = {
  title: 'My Different Title',
  description: 'My Description',
};

const obj2 = {
  title: 'My Different Title',
  description: 'My Description',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

test('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
  expect(obj1).toEqual(obj2);
  expect(obj1).toEqual(obj3);
  expect(obj2).toEqual(obj3);
});