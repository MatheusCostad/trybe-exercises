let backColor = document.getElementById("textBackgroundColor");
let textColor = document.getElementById("textColor");
let fontScale = document.getElementById("fontScale");
let lineSpacing = document.getElementById("lineSpacing");
let fontStyle = document.getElementById('fontStyle');
let article = document.querySelector('article');

window.onload = function () {
  let backgroundColor = localStorage.getItem("backgroundColor");
  addBackgroundColor(backgroundColor);

  let fontColor = localStorage.getItem("fontColor");
  addFontColor(fontColor);

  let fontSize = localStorage.getItem("fontSize");
  addFontSize(fontSize);

  let lineHeight = localStorage.getItem("lineHeight");
  addLineHeight(lineHeight);

  let fontFamily = localStorage.getItem("fontFamily");
  addfontFamily(fontFamily);

}

function addBackgroundColor(color){
  let body = document.querySelector('body');
  body.style.backgroundColor = color;
  localStorage.setItem("backgroundColor", color);
}


function addFontColor(color){
  article.style.color = color;
  localStorage.setItem("fontColor", color);
}

function addFontSize(origin){
  if (origin === 'Pequena') {
    article.style.fontSize = '8pt';
  } else if (origin === 'Média') {
    article.style.fontSize = '14pt';
  } else {
    article.style.fontSize = '20pt';
  }
  localStorage.setItem("fontSize", origin);
}

function addLineHeight(origin){
  article.style.lineHeight = origin;
  localStorage.setItem("lineHeight", origin);
}

function addfontFamily(origin){
  article.style.fontFamily = origin;
  localStorage.setItem("fontFamily", origin);
}

backColor.addEventListener('click', function (origin) {
  let color = origin.target.innerText;
  addBackgroundColor(color);
});

textColor.addEventListener('click', function (origin){
  let colorText = origin.target.innerText;
  addFontColor(colorText);
}
);

fontScale.addEventListener('click', function (origin) {
  let size = origin.target.innerText;
  addFontSize(size);
});

lineSpacing.addEventListener('click', function (origin) {
  let spacing = origin.target.innerText;
  addLineHeight(spacing);
});

fontStyle.addEventListener('click', function(origin){
  let style = origin.target.innerText;
  addfontFamily(style);
});


