let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



for (let index = 1; index < number.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (number[index] < number[secondIndex]) {
      let position = number[index];
      number[index] = number[secondIndex];
      number[secondIndex] = position;
    }
  }
}

console.log(number);