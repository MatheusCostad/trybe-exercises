function verificaPalindrome(word) {
  let reverseWord = word.split('').reverse().join('');
  if (word === reverseWord) {
    return true
  } 
  return false
}

console.log(verificaPalindrome('arara'));

