function verificaPalindrome(word) {
  let reverseWord = word.split('').reverse().join('');
  if (word === reverseWord) {
    return true
  } 
  return false
}

console.log(verificaPalindrome('arara'));

function higherNumber(numbers) {
  let maior = numbers[0];
  for (let compare of numbers) {
    if (compare > maior) {
      maior = compare
    }
  }
  return maior
}

function higherNumberIndex(numbers) {
  let maior = higherNumber(numbers);
for (const key in numbers) {
  if (maior === numbers[key]) {
    return key
  }
}
}

console.log(higherNumberIndex([2, 3, 6, 7, 10, 1]));

function lowestNumber(numbers) {
  let lowest = numbers[0];
  for (let compare of numbers) {
    if (compare < lowest) {
      lowest = compare
    }
  }
  return lowest
}

function lowestNumberIndex(numbers) {
  let lowest = lowestNumber(numbers);
for (const key in numbers) {
  if (lowest === numbers[key]) {
    return key
  }
}
}

console.log(lowestNumberIndex([2, 4, 6, 7, 10, 0, -3]));

function biggestName(names) {
  let biggest = names[0];
  for (const key in names) {
    if (names[key].length > biggest.length) {
      biggest = names[key];
    }
  }
  return biggest;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


function repeat(numbers) {
  let repeat = 0;
  let count2 = 0;
  for (let key of numbers) {
  let count = 0;  
    for (let key2 of numbers) {
      if (key === key2) {
        count += 1
      }
    }
  if (count2 < count) {
    repeat = key;
    count2 = count;
    count = 0;
  }
  count = 0;
  }
return repeat
}

console.log(repeat([3, 3, 2, 5, 8, 3, 2]));

