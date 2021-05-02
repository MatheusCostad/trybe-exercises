const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const turnAdd = (object , key, value) => object[key] = value;
const listKeys = object => Object.keys(object);
const sizeObject = object =>  Object.keys(object).length;

turnAdd(lesson2, 'turno', 'manhã' );

console.log(lesson2);

console.log(listKeys(lesson1));

console.log(sizeObject(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const totalStudents = object => {
  const lessons = Object.keys(object);
  let total = 0;
  for (index in lessons) {
    total += object[lessons[index]].numeroEstudantes;
  }
  return total;
}

console.log(totalStudents(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));