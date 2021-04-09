// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let body = document.querySelector('body');
let bodyChild1 = document.createElement('h1');
bodyChild1.innerText = 'Exercício 5.2';
body.appendChild(bodyChild1);

// Adicione a tag div com a classe main-content como filho da tag body ;
let bodyChild2 = document.createElement('div');
bodyChild2.className = 'main-content';
body.appendChild(bodyChild2);

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let div1 = document.querySelector('body .main-content'); 
let div1Child1 = document.createElement('div');
div1Child1.className = 'center-content';
div1.appendChild(div1Child1);

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;