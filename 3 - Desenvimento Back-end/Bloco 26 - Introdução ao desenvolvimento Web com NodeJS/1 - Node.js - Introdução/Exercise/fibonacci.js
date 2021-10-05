const readline = require('readline-sync');

function fibonacciSequency(number) {
  let fibonacciSequency = [1, 1];
  if (number <= 0) return 'Número inválido';
  if (number === 1) return '1';
  for(index = 2; index <  number; index += 1) {
    fibonacciSequency = [ ...fibonacciSequency, (fibonacciSequency[index - 1] + fibonacciSequency[index - 2])];
  }
  return fibonacciSequency;
}

const number = readline.questionInt('Quantos números da sequencia de fibonacci deseja retornar ?');
console.log(fibonacciSequency(number));