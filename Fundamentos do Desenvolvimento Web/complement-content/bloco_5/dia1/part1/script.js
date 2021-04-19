var paragraph = document.querySelector('.paragraph');
paragraph.style.color = "red";

// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
// Por fim, recupere o subtítulo e altere-o também.

document.querySelector('#page-title').innerText = 'Perfect Blue';

let secundParagraph = document.querySelector("#second-paragraph");
secundParagraph.style.color = "blue";

document.querySelector("#subtitle").innerText = 'Akira';

console.log(document.querySelectorAll('.paragraph'));

let firstParagraph = document.querySelector('.paragraph');
firstParagraph.style.width = '20px';

console.log(document.querySelectorAll('h4'));
