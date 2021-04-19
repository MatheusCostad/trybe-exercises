let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0; 
for (let number of numbers) {
  if ((number%2) > 0) {
    impares = impares + 1;
  } else {
    impares = impares
  }
}

console.log(impares);