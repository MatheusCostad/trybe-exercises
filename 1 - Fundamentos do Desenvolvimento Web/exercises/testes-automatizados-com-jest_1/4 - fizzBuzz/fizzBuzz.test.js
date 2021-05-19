const myFizzBuzz = require('./fizzBuzz');

describe('FizBuzz', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado',() => {
    expect(myFizzBuzz(15)).toMatch(/fizzbuzz/);
  });
  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado',() => {
    expect(myFizzBuzz(9)).toMatch(/fizz/);
  });
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado',() => {
    expect(myFizzBuzz(25)).toMatch(/buzz/);
  });
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado',() => {
    expect(myFizzBuzz(17)).toBe(17);
  });
  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado',() => {
    expect(myFizzBuzz('this_is_not_a_number')).toBeFalsy();
  });
});