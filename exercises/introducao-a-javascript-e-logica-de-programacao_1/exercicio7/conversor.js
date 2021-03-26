let porcentagem = 0;

if (porcentagem >= 90 && porcentagem < 101) {
  console.log('A');
} else if (porcentagem >= 80 && porcentagem < 90) {
  console.log('B');
} else if (porcentagem >= 70 && porcentagem < 80) {
  console.log('C');
} else if (porcentagem >= 60 && porcentagem < 70) {
  console.log('D');
} else if (porcentagem >= 50 && porcentagem < 60) {
  console.log('E');
} else if (porcentagem < 50 && porcentagem > -1) {
  console.log('F');
} else {
  console.log('error');
}