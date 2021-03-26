let salario = 3500.00;
let salarioINSS = 0;
let salarioli = 0;

if ( salario < 1556.94 | salario > 1) {
  salarioINSS = salario - salario*(8/100);
} else if (salario >= 1556.94 | salario <= 2594.92) {
  salarioINSS =  salario - salario*(9/100);
} else if (salario >= 2594.93 | salario <= 5189.82) {
  salarioINSS = salario - salario*(11/100);
} else {
  salarioINSS = salario - 570.88;
}

if (salarioINSS >= 1908.99 | salario <= 2826.65) {
  salarioli = salarioINSS - salarioINSS*(7.5/100) + 142.80;
} else if (salarioINSS >= 2826.66 | salarioINSS <= 3751.05) {
  salarioli = salarioINSS - salarioINSS*(15/100) + 354.80;
} else if (salarioINSS >= 3751.06 | salarioINSS <= 4664.68) {
  salarioli = salarioINSS - salarioINSS*(22.5/100) + 636.13;
} else if (salarioINSS >= 4664.69) {
  salarioli = salarioINSS - salarioINSS*(27.5/100) + 869.36;
} else {
  salarioli = salarioINSS - 0;
}

console.log(salarioli)