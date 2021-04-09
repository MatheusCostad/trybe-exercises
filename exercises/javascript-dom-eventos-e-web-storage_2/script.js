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
let div2 = document.querySelector('div .center-content');
let paraChildDiv2 = document.createElement('p');
paraChildDiv2.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam atque quas nesciunt, deleniti officia temporibus corrupti tenetur quis molestias tempora optio reprehenderit ab omnis quasi ullam vitae cumque blanditiis.';
div2.appendChild(paraChildDiv2);

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let div1Child2 = document.createElement('div');
div1Child2.className = 'left-content';
div1.appendChild(div1Child2);

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let div1Child3 = document.createElement('div');
div1Child3.className = 'right-content';
div1.appendChild(div1Child3);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

let div3 = document.querySelector('div .left-content');
let imgDiv3 = document.createElement('IMG');
imgDiv3.className = 'small-image';
imgDiv3.src = 'https://picsum.photos/200';
div3.appendChild(imgDiv3);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

let div4 = document.querySelector('div .right-content');
let listChildDiv3 = document.createElement('ul');
listChildDiv3.className = 'list1a10';
div4.appendChild(listChildDiv3);

let list = document.querySelector('.list1a10');
for (let index = 1; index < 11; index++) {
  let listItem = document.createElement('li');
  listItem.innerText = index;
  list.appendChild(listItem);
}

// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
