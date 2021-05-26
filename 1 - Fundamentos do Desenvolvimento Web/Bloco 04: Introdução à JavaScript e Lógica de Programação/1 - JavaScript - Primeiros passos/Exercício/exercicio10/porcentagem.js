let custo = 20;
let venda = 60;

if (custo < 0 | venda < 0) {
  console.log('error');
} else {

let imposto = custo * (20/100);
let custoTotal = custo + imposto;

console.log(venda - custoTotal);

};

