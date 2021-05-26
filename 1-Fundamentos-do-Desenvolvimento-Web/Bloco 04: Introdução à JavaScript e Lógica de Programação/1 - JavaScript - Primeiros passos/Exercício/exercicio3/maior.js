let valor1 = 40;
let valor2 = 60;
let valor3 = 50;

if (valor2 < valor1 && valor1 >valor3) {
    console.log(valor1);
} else if (valor3<valor2 && valor2>valor1) {
    console.log(valor2);
} else if (valor1<valor3 && valor3>valor2){
    console.log(valor3);
} else {
    console.log('não tem  maior');
}
