const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const sumGrades = (accSum, curGrades) => accSum + curGrades;
  const calcAverage = array => array.reduce(sumGrades)/array.length;
  const mapAverage = array => array.map(nodes => calcAverage(nodes));
  return mapAverage(grades).map((averages, index) => { 
    return { name: students[index], average: averages }
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);