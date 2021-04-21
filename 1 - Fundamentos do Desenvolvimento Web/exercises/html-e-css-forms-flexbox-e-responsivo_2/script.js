let comboBox = document.getElementById('estados');
let submitButton = document.getElementById('submitButton');
let clearButton = document.getElementById('clearButton'); 

function createStates() {
  let comboBox = document.getElementById('estados');
  let states = {
    AC:"Acre",
    AL:"Alagoas",
    AP:"Amapá",
    AM:"Amazonas",
    BA:"Bahia",
    CE:"Ceará",
    DF:"Distrito Federal",
    ES:"Espírito Santo",
    GO:"Goiás",
    MA:"Maranhão",
    MT:"Mato Grosso",
    MS:"Mato Grosso do Sul",
    MG:"Minas Gerais",
    PA:"Pará",
    PB:"Paraíba",
    PR:"Paraná",
    PE:"Pernambuco",
    PI:"Piauí",
    RJ:"Rio de Janeiro",
    RN:"Rio Grande do Norte",
    RS:"Rio Grande do Sul",
    RO:"Rondônia",
    RR:"Roraima",
    SC:"Santa Catarina",
    SP:"São Paulo",
    SE:"Sergipe",
    TO:"Tocantins"
    };
  for (const key in states) {
    const element = states[key];
    const option  = document.createElement('option');
    option.value = key;
    option.innerText = element;
    comboBox.appendChild(option);
  }
}
createStates();

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
  }
}

function clearValuer() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
  }
}

submitButton.addEventListener('click', renderCurriculum());

clearButton.addEventListener('click', clearValuer());

window.onload = function () {
  createStates();
}

document.getElementById("dateText").DatePickerX.init();
