let candidato = 'lista';

switch (candidato) {
  case 'reprovado':
    console.log('Você foi reprovada(o)');
    break;

  case 'aprovado':
    console.log('Parabéns, você foi aprovado(o)!'); 
    break;
  
  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;

default:
  console.log('não se aplica')
}