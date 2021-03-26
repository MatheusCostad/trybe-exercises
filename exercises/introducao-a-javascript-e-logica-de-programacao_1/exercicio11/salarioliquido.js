let salario = 1000.00;
let salarioINSS = 0;
let salariofinal = 0;

if ( salario < 1556.94 | salario > 1) {
  salarioINSS = salario - salario*(8/100);
} else if (salario >= 1556.94 | salario <= 2594.92) {
  salarioINSS = salario - salario*(9/100);
} else if (salario >= 2594.93 | salario <= 5189.82) {
  salarioINSS = salario - salario*(11/100);
} else {
  salarioINSS = salario - 570.88;
}

if (salario >= 1908.99 | salario <= 2826.65) {
  salarioIR
}