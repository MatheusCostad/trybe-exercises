let peça = 'bispo';

switch (peça) {
  
	case 'torre':
		console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.');
		break;
	
	case 'bispo':
		console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.');
		break;
	
	case 'peão':
		console.log('De maneira geral, os peões se movem somente para frente, uma casa por vez.');
		break;
	
	case 'cavalo':
		console.log('O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.')
	
	case 'rainha':
		console.log('Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.');

	case 'rei':
		console.log('O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.')

	default:
		console.log('error!');
  break;
}