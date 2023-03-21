'use strict';

/* ////////// SCOPE ///////// */
console.log('>>> SCOPE');

// EXAMPLE TO BE ANALYZED

const myName = 'Carlos';
// console.log(millenial);

function first() {
  const age = 43;
  console.log(millenial); //undefined

  if (age >= 30) {
    const decade = 3;
    var millenial = true;
    console.log(myName, age);
  }

  // console.log(job);
  // console.log(decade);
  console.log(millenial);

  function second() {
    const job = 'developer';
    console.log(`${myName} is a ${age}-old ${job}.`);
    console.log(millenial);
  }

  // console.log(job);
  second();
}

first();

// EXAMPLE TO BE ANALYZED

const a = 'a';
primero();

function primero() {
  const b = 'b';
  segundo();

  function segundo() {
    const c = 'c';
    // tercero();
    // tercero can not access variables declared in other function scope
  }
}

function tercero() {
  const d = 'd';
  console.log(a + b + c + d);
}

// EXAMPLE TO BE ANALYZED

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log({ firstName });

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1980 && birthYear <= 1996) {
      // can access global firstName but also we can create a new scope one
      const firstName = 'Steve';
      var str = `Oh! you are a milleanial, ${firstName}`;
      // we can reasign outer scope
      output = 'New String!!';
    }
    // we can access because var key is function scope
    console.log(str);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Carlos';
calcAge(1980);

/* ////////// HOISTING & TDZ (Temporal Dead Zone) ///////// */
console.log('>>> HOISTING & TDZ');

// VARIABLES HOISTING
console.log(me); // Hoisted with undefined value
// console.log(job); // Temporal Dead Zone
// console.log(year); // TDZ

var me = 'Carlos';
let job = 'Developer';
const year = 1980;

// FUNCTION HOISTING
console.log(addDeclaration(1, 2));
// console.log(addExpression(1, 2));
// console.log(addArrow(1, 2));
// console.log(addVar(1, 2)); // Not a function
console.log(addVar); // Undefined

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => {
  return a + b;
};

var addVar = function (a, b) {
  return a + b;
};

// BUG EXAMPLE

console.log(numProducts); // Will be hoisted with undefined value

// Will be falsy eventhought it was declare with value 10
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

/* ////////// THE THIS KEYWORD ///////// */
console.log('>>> THE THIS KEYWORD');

console.log('Global this:', this); // This will get the global window object

// this keyword in functions
function multNum(a, b) {
  console.log('Function "this": ', this); // undefined in strict mode because there is not object to point at
  return a * b;
}
multNum(2, 2);

const mertens = {
  firstName: 'Carlos',
  lastName: 'Mertens',
  printName: function () {
    console.log(this.firstName, this.lastName);
    console.log('Call this in method: ', this);
  },
};
mertens.printName();

// Method borrowing
const jones = {
  firstName: 'Rick',
  lastName: 'Jones',
};
jones.printName = mertens.printName;
console.log('Borrowed printName method: ', jones);
jones.printName();

// Arrow function does not have own this keyword
const multNumArrow = (a, b) => {
  console.log(a * b);
  console.log(this); // Will point to the parent object
};
multNumArrow(2, 2);

/* ////////// REGULAR vs ARROW FUNCTIONS ///////// */
console.log('>>> Regular vs Arrow functions');

// this keyword will be point at global window with the arrow function
// As a rule, never use arrow to define a method
var myFirstName = 'GlobalName';

const moreno = {
  myFirstName: 'Edgar',
  myLastName: 'Moreno',

  logFirstName: function () {
    console.log(`Hello ${this.myFirstName}`);

    const self = this; // Old solution to inherit this in a function
    const logLastName = function () {
      console.log(`Hello ${self.myLastName}`);
    };
    logLastName();

    // Modern solution, arrow function will inherit this keyword from parent
    const logName = () => console.log(`${this.myFirstName} ${this.myLastName}`);
    logName();
  },

  // this will be from parent (var myFirstName)
  printName: () => console.log(`Hello ${this.myFirstName}`),
};
moreno.logFirstName();
moreno.printName();

// Arguments keyword

function sumNumbers(a, b, c) {
  // check arguments keyword
  console.log(arguments);
  return a + b + c;
}

sumNumbers(1, 2, 3);

// We can also call more arguments than the parameters
sumNumbers(1, 2, 3, 4, 5);

// Arrow function doea not have the arguments keywords
const addNumbers = (a, b, c) => {
  console.log(arguments);
  return a + b + c;
};

/* ////////// PRIMITIVES vs OBJECTS ///////// */
console.log('>>> Primitives vs objects');

// Primitive types
// Create memory on the Stack
let age = 40;
let oldAge = age; // it will copy the identifier's address
age = 41; // it will not change oldAge but create a new address
console.log({ age });
console.log({ oldAge });

// Object (reference) types
// Create memory on the Heap
const person1 = {
  name: 'carlos',
  age: 44,
};

const person2 = person1; // will copy reference to the Heap
person2.age = 45; // it will change also person1

console.log({ person1 });
console.log({ person2 });

// Copy objects and not the reference point using Object.assign()
// creates only a shallow copy, means that if there is another object inside,
// it will be pointing to the originals
const maria = {
  firstName: 'Maria',
  lastName: 'Perez',
  age: 27,
  friends: ['pedro', 'john', 'jessica'],
};

const mariaCopy = Object.assign({}, maria);
mariaCopy.age = 28;
mariaCopy.friends.push('Alice');

console.log({ maria });
console.log({ mariaCopy });
