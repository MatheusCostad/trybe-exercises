const readline = require("readline-sync");

function returnAVGSpeed() {
  const distance = readline.questionInt('Qual a distância percorrida em cm ?');
  const time = readline.questionInt('Qual a duração em segundos ?');
  const AVGSpeed = Math.round((distance/time)*100)/100;
  console.log(`A velocidade média do carro na corrida foi de ${AVGSpeed}m/s.`);
};
returnAVGSpeed();
module.exports = returnAVGSpeed;