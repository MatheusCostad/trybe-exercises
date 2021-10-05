const readline = require("readline-sync");

const applications = [
  { name: 'IMC', file: './imc' },
  { name: 'Velocidade média', file: './velocidade' },
  { name: 'Sorteio', file: './sorteio' },
  { name: 'Fibonacci', file: './fibonacci' },
  { name: 'Fatorial', file: './fatorial' }
]
function questionScript() {
  console.log('Qual aplicação vc deseja utilizar ?');
  applications.forEach(({ name }, index) => {
    console.log(`${index + 1} - ${name}`);
  })
  const answer = readline.questionInt(`Responda com o número referente a aplicação.`);
  require(applications[answer - 1].file);
};
questionScript();