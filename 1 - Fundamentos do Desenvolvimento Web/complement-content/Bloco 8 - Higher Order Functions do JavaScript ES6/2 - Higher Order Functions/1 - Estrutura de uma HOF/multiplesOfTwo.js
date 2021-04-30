const meuArray = [2, 3, 4, 5, 10, 20];

meuArray.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divisível por 2!`);
  }
});