const readline = require("readline-sync");

function compareNumbers() {
  const userNumber = readline.questionInt('\nEscola um número de 0 a 10\n');
  const randomNumber = Math.floor(Math.random()*11);
  if(randomNumber === userNumber) {
    console.log('\nParabéns, número correto!');
  } else {
    console.log(`\nOpa, não foi dessa vez. O número era ${randomNumber}`);
  };
};

function returnGame() {
  let repeats = 's';
  do {
    compareNumbers();
    repeats = readline.question(`\nDeseja jogar novamente? Responda 's' caso queria jogar novamente.\n`);
  } while (repeats === 's');
};

returnGame();