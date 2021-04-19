function divisao(a, b) {
  return a / b;
}

console.log(divisao(10, 2));

function modulo(a, b) {
  return a % b;
}

console.log(modulo(10, 3));

function multiplicacao(a, b) {
  return a * b;
}

console.log(multiplicacao(1, 2));

function soma(a, b) {
  return a + b;
}

console.log(soma(1, 2));

function subtracao(a, b) {
  return a - b;
}

console.log(subtracao(2, 1));

function maior(a, b) {
  if (a > b) {
 
    return a ;

  } else if (b > a) {

    return b ;

  } else {

    return 'Os valores são iguais.';

  }
}

console.log(maior(1, 2));

function maiorDeTres(valor1, valor2, valor3) {
  if (valor2 < valor1 && valor1 >valor3) {
    return valor1;
  } else if (valor3<valor2 && valor2>valor1) {
    return valor2;
  } else if (valor1<valor3 && valor3>valor2){
    return valor3;
  } else {
    return 'Os valores são iguais.';
  }
}

console.log(maiorDeTres(1, 2, 3));

function positivo(number) {
  if (number > 0) {
    return 'positivo';
  } else {
    return 'negativa';
  }
}

console.log(positivo(100));

function triangulo(ângulo1, ângulo2, ângulo3) {
  if (ângulo1+ângulo2+ângulo3 == 180) {
    return true;
  } else {
    return false;
  }
}

console.log(triangulo(100, 20, 60));

function xadrez(peça) {
  switch (peça) {
  
    case 'torre':
      return 'A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.';
    break;
    
    case 'bispo':
      return 'O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.';
    break;
    
    case 'peão':
      return 'De maneira geral, os peões se movem somente para frente, uma casa por vez.';
    break;
    
    case 'cavalo':
      return 'O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.';
    break;
    
    case 'rainha':
      return 'Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.';
    break;
  
    case 'rei':
      return 'O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.';
    break;
  
    default:
      return 'error!';
    break;
  }
}

console.log(xadrez('torre'));

function conversor(porcentagem) {
  if (porcentagem >= 90 && porcentagem < 101) {
    return 'A';
  } else if (porcentagem >= 80 && porcentagem < 90) {
    return 'B';
  } else if (porcentagem >= 70 && porcentagem < 80) {
    return 'C';
  } else if (porcentagem >= 60 && porcentagem < 70) {
    return 'D';
  } else if (porcentagem >= 50 && porcentagem < 60) {
    return 'E';
  } else if (porcentagem < 50 && porcentagem > -1) {
    return 'F';
  } else {
    return 'error';
  }
}

console.log(conversor(80));

function par(num1, num2, num3) {

if (num1%2==0 | num2%2==0 | num3%2==0) {
  return 'true';
} else {
  return 'false';
}

}

console.log(par(8, 10, 12));

function impar(num1, num2, num3) {
  if (num1%2==0 | num2%2==0 | num3%2==0) {
    return 'false';
} else {
    return 'true';
}
}

console.log(impar(8, 10, 12));

function porcentagem(custo, venda) {
  if (custo < 0 | venda < 0) {
    return 'error';
  } else {
  
  let imposto = custo * (20/100);
  let custoTotal = custo + imposto;
  
  return venda - custoTotal;
  
  }
}

console.log(porcentagem(20, 60));

function salarioliquido(salario ) {
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
  
  return salarioli;
}

console.log(salarioliquido(3500.00));