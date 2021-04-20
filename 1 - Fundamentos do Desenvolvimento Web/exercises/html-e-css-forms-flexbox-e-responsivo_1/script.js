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

function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year >= 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('#dateText');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('data invalida');
    return false;
  }
  return userData;
}

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
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