let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicação = [];

for (let index = 0; index < number.length; index += 1) {
  if (index < number.length-1) {
    multiplicação.push (number[index]*number[index+1]);
  } else {
    multiplicação.push (number[index]*2);
  }
}

console.log(multiplicação);