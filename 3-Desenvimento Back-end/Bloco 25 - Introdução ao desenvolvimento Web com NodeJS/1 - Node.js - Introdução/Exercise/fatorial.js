const readline = require("readline-sync");

function returnFactorial() {
  const number = readline.questionInt('Qual número deseja realizar o fatorial ?\n');
  let factorial = number;
  if(number > 0) {
    for(index = 1; index < number; index += 1) factorial *= (number - index);
    console.log(`O factorial de ${number} é ${factorial}`);
  } else console.log('Número inválido');
}

returnFactorial();