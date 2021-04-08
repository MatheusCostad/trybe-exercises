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
