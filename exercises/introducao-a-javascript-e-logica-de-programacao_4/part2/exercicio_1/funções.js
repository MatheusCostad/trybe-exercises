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
    } else {
      maior = maior
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