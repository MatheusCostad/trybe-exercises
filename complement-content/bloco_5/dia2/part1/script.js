let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

console.log(elementoOndeVoceEsta);

let parentNode = document.querySelector('#elementoOndeVoceEsta').parentNode;

parentNode.style.color = 'blue';

document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerText = 'Batata.';

let firstChild = document.querySelector('#pai').firstElementChild;

console.log(firstChild);

console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);

let pai = document.querySelector('#pai');
let ondeEstouIrmao = document.createElement('div');
ondeEstouIrmao.innerText = 'teste';
pai.appendChild(ondeEstouIrmao);

let ondeEstou = document.querySelector('#elementoOndeVoceEsta');
let ondeEstouFilho = document.createElement('div');
ondeEstouFilho.innerText = 'teste';
ondeEstou.appendChild(ondeEstouFilho);

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let primeiroFilhoDoFilhoFilho = document.createElement('div');
primeiroFilhoDoFilhoFilho.innerText = 'test';
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoFilho);

console.log(document.querySelector('#primeiroFilhoDoFilho div').parentElement.parentElement.nextElementSibling);





