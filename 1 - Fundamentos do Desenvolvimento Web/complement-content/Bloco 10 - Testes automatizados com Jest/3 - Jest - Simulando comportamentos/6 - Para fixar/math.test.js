const math = require('./math.js');

describe('Testando as funções matemáticas', () => {
  it ('testar chamada da função subtrair', () => {
    math.subtrair = jest.fn();

    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });
  it (`multiplicar com retorno padrão de valor '10'`, () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  });
  it (`Testa chamada, retorno e parâmetros passados para soma com entrada de dois valores`, () => {
    const mockSomar = jest.spyOn(math, "somar");
    mockSomar.mockResolvedValue(5);
    mockSomar(2, 3);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(2, 3);
    expect(mockSomar(2, 3)).resolves.toBe(5);
  });
  it ('Testa chamada, retorno e parâmetros da função dividir', () => {
    const mockDividir = jest.spyOn(math, "dividir");
    mockDividir.mockReturnValue(15);
    mockDividir.mockReturnValueOnce(2);
    mockDividir.mockReturnValueOnce(5);
  
    expect(mockDividir(4, 2)).toBe(2);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(1);
    expect(mockDividir).toHaveBeenCalledWith(4, 2);
  
    expect(mockDividir(10, 2)).toBe(5);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(2);
    expect(mockDividir).toHaveBeenCalledWith(10, 2);
  
    expect(mockDividir(30, 2)).toBe(15);
    expect(mockDividir).toHaveBeenCalled();
    expect(mockDividir).toHaveBeenCalledTimes(3);
    expect(mockDividir).toHaveBeenCalledWith(30, 2);
  });
  it ('Mock da função subtrair de modo que possa restaurar sua implementação original', () => {
    const mockSubtrair = jest.spyOn(math, "subtrair");
    mockSubtrair.mockImplementation((a, b) => a * b);
    mockSubtrair.mockReturnValue(20);
  
    expect(mockSubtrair(10, 2)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(2);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  
    mockSubtrair.mockRestore();
    mockSubtrair.mockReturnValue(8);
  
    expect(mockSubtrair(10, 2)).toBe(8);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  });
});