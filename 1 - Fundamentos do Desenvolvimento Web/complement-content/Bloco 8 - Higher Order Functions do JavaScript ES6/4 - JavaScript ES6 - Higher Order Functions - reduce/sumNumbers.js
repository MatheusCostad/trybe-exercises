const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113