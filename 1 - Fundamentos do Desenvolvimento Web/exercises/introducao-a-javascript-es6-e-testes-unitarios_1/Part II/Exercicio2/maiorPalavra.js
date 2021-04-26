const longestWord = string => {
  const words = string.split(' ');
  let biggestWord = ' '; 
  for (const iterator of words) {
    if (iterator.length > biggestWord.length) {
      biggestWord = iterator;
    }
  }
  return biggestWord
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
