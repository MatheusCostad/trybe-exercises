const { questionInt } = require("readline-sync");

function returnAVGSpeed() {
  const distance = questionInt('Qual a distância percorrida em cm ?\n');
  const time = questionInt('Qual a duração em segundos ?\n');
  const AVGSpeed = Math.round((distance/time)*100)/100;
  console.log(`A velocidade média do carro na corrida foi de ${AVGSpeed}m/s.`);
};
returnAVGSpeed();