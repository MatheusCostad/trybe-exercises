const readline = require("readline-sync");

function returnIMC() {
  const weight = readline.questionFloat("Qual o seu peso em kg ?");
  const height = readline.questionFloat("Qual o sua altura em cm ?");
  const imc = Math.round(weight/((height/100)**2) * 100)/100;
  const situation = (imcNumber) => {
    if (imcNumber < 18.5) return "abaixo do peso";
    if(imcNumber  < 25) return "com o peso normal";
    if(imcNumber < 30) return "acima do peso";
    if(imcNumber < 35) return "com obesidade grau I";
    if(imcNumber < 40) return "com obesidade grau II";
    return "com obesidade graus III e IV";
  }
  console.log(`Seu imc é de ${imc}. Você está ${situation(imc)}`);
};

returnIMC();

module.exports = returnIMC;