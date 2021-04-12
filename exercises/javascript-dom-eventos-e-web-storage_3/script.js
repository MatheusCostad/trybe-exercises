function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];  

function createDays() { 
  let dayList = document.getElementById('days');
  
  for (let day of dezDaysList) {
    let dayLi = document.createElement('li');
    if (day === 24 | day === 31){
      dayLi.innerHTML = day;
      dayLi.className = 'day holiday';
      dayList.appendChild(dayLi);
    } else if (day === 4 | day === 11 | day === 18){
      dayLi.className = 'day friday';     
      dayLi.innerText = day;
      dayList.appendChild(dayLi);
    } else if (day === 25) {
      dayLi.className = 'day holiday friday';     
      dayLi.innerText = day;
      dayList.appendChild(dayLi);
    } else {
      dayLi.className = 'day';     
      dayLi.innerText = day;
      dayList.appendChild(dayLi);
    }
  }
};

createDays();

function createButton(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  
  button.innerText = buttonName;
  button.id = 'btn-holiday';
  buttonContainer.appendChild(button);
}

createButton('Feriados');

let holidayButton = document.getElementById('btn-holiday');

function holidayButtonClick() {
  let holidayAll = document.querySelectorAll('.holiday');
  for (const holiday of holidayAll) {
      if (holiday.style.backgroundColor === 'white') {
    holiday.style.backgroundColor = 'rgb(238,238,238)';
  } else {
    holiday.style.backgroundColor = 'white';
  }
  }
}

holidayButton.addEventListener('click', holidayButtonClick);


function createButtonFriday(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  
  button.innerText = buttonName;
  button.id = 'btn-friday';
  buttonContainer.appendChild(button);
}

createButtonFriday('Sexta-feira');

let fridayButton = document.getElementById('btn-friday');

function fridayButtonClick() {
  let fridayAll = document.querySelectorAll('.friday');
  let fridays = [ 4, 11, 18, 25 ];
  for (const key in fridayAll) {
  let friday = fridayAll[key];
    if (friday.innerText === 'Sextou') {
    friday.innerText = fridays[key];
  } else {
    friday.innerText = 'Sextou';
  }
  }
}
fridayButton.addEventListener('click', fridayButtonClick);

let days = document.querySelector('#days');

function zoom(origin) {
  origin.target.style.fontSize = '40px';
}
function invertZoom(origin) {
  origin.target.style.fontSize = '20px';
}

days.addEventListener('mouseover', zoom);

days.addEventListener('mouseout', invertZoom);

function personalTask(task) {
  let taskList = document.querySelector('.my-tasks');
  let taskText = document.createElement('span');
  taskText.innerHTML = task;
  taskList.appendChild(taskText);
}

personalTask('cozinhar')

function addColor(color) {
  let taskSelect = document.querySelector('.my-tasks');
  let taskColor = document.createElement('div');
  taskColor.className = 'task';
  taskColor.style.backgroundColor = color;
  taskSelect.appendChild(taskColor);
}

addColor('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();