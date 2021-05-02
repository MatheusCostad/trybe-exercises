const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

let newKey = 'lastName';
const lastName = 'Ferreira';
customer1[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer1.firstName} ${customer1.lastName}`;
customer1[newKey] = fullName;
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);


const clientAdd = (object, key, value) => {
  object[key] = value
};

clientAdd(customer2, 'test1', 'test2');

console.log(customer2);