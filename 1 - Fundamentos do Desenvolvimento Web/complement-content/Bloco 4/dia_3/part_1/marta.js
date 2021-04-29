let player = {
  name:'Marta',
  lastName: 'Silva',
  age: '34',
  metals: {gold: 2, silver: 3 }
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora Marta Silva foi eleita a melhor do mundo por '+ player.bestInTheWorld.length +' vezes');

console.log('A jogadora possui '+ player.metals.gold +' medalhas de ouro e '+ player.metals.silver +' medalhas de prata');