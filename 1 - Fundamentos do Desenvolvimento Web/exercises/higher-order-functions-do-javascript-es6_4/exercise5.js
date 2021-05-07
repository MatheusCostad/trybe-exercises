
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const contALettersN = (accCont, curLetter) => (curLetter === 'a' || curLetter === 'A') ? (accCont + 1) : accCont;
  const contALettersT = (accCont, curName) => accCont + curName.split('').reduce(contALettersN, 0);
  return names.reduce(contALettersT, 0);
}

assert.deepStrictEqual(containsA(), 20);