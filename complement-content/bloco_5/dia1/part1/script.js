var paragraph = document.getElementById("first-paragraph");
paragraph.style.color = "blue";

// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
// Por fim, recupere o subtítulo e altere-o também.

document.getElementById('page-title').innerText = 'Perfect Blue';

let secundParagraph = document.getElementById("second-paragraph");
secundParagraph.style.color = "blue";

document.getElementById("subtitle").innerText = 'Akira';

console.log(document.getElementsByClassName('paragraph'));

let firstParagraph = document.getElementsByClassName('paragraph')[0];
firstParagraph.style.width = '20px';

console.log(document.getElementsByTagName('h4'));
