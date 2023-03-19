'use strict';

/* ////////// SCOPE ///////// */
console.log('////////// SCOPE /////////');

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
console.log('////////// HOISTING & TDZ /////////');

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
