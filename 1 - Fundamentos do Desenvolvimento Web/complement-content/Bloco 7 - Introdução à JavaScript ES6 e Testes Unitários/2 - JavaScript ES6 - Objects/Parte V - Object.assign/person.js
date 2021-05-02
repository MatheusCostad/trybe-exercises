const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  child: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */
console.log("-------------------------------------------------------------------------------------------------------------------------------------");
  const person1 = {
    name: 'Roberto',
  };
  
  const lastName1 = {
    lastName: 'Silva',
  };
  
  const clone1 = Object.assign(person1, lastName1);
  console.log(clone1); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person1); // { name: 'Roberto', lastName: 'Silva' }
  console.log("-------------------------------------------------------------------------------------------------------------------------------------");

  clone1.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone1); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person1.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone1); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log("-------------------------------------------------------------------------------------------------------------------------------------");
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;


const person2 = {
  name:'Roberto',
};

const lastName2 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person2,lastName2);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person2);