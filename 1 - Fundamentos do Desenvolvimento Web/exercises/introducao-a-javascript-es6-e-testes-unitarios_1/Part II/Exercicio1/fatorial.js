const factorization = number => number > 1 ? number * factorization(number - 1) : 1 ;
console.log(factorization(5));