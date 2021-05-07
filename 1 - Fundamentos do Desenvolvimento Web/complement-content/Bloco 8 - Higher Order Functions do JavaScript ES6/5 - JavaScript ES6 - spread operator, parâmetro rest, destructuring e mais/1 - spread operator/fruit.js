// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Uva', 'Maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mel', 'Granola', 'Amendoim'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruitSalad = [...fruit, ...additional]
  return fruitSalad
};

console.log(fruitSalad(specialFruit, additionalItens));