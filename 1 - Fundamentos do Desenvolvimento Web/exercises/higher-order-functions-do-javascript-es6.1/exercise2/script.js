const numberChecker = (number, randomNumber) => number === randomNumber;

const result = (number, callback) => {
  const randomNumber = Math.floor((Math.random() * 5) + 1);

  return callback(number, randomNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(result(2, numberChecker));
