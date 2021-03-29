let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (const key in carro) {
  console.log(key + ': ' +carro[key]);
}