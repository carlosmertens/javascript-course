'use strict';
/* ********** STRICT MODE ********** */

// Help us avoid bugs in the code
// Help us avoid rerserve variable names

/* ********** FUNCTIONS ********** */
console.log('>>> FUNCTIONS');

// FUNCTION DECLARATION

// Can be used before being declare
// logger();
function logger() {
  // Function body. Write your code here...
  console.log(`My name is Carlos!`);
}
// Invoking, calling or running the function
// logger();

// Function with parameters
function mixJuicer(fruitOne, fruitTwo, fruitThree) {
  const juice = `Make mix juice with ${fruitOne}, ${fruitTwo}, ${fruitThree}. Thanks!`;
  return juice;
}
// Invoke function with arguments
// console.log(mixJuicer('apples', 'carrots', 'oranges'));

// FUNCTION EXPRESSIONS

// A function value stored in a variable
const calculateAge = function (yearBorn) {
  const currentYear = 2023;
  return currentYear - yearBorn;
};
const myAge = calculateAge(1980);

// ARROW FUNCTIONS

// arrow functions do noit get "this" keyword
const ageBy2050 = (yearBorn) => 2050 - yearBorn;
// console.log(ageBy2050(1980));

const yearsUntilRetirement = (yearBorn, retirementAge) => {
  // Invoking a function inside a function
  const age = calculateAge(yearBorn);
  const years = retirementAge - age;
  // Return value conditionally
  if (years > 0) {
    // console.log(`${years} more years to retire`);
    return years;
  } else {
    // console.log('Already retired! 🎉');
    return -1;
  }
};
// console.log(yearsUntilRetirement(1950, 65));

/* ********** DATA STRUCTURE ********** */

// ARRAYS DECLARATION
console.log('>>> ARRAYS');

// Create arrays with literal syntax and with new Array() function
const friends = ['Hermes', 'Jose', 'Felipe', 'Romeo'];
const years = new Array(1980, 1984, 1987, 2023);
const firstName = 'Carlos';
const myInfo = [firstName, 'Mertens', years[0], friends];
// console.log(myInfo);

// Arrays start with index 0
// console.log(friends[0]);
// console.log(years[1]);

// ARRAYS MUTATION

// console.log(friends);
friends[2] = 'Fabian';
// console.log(friends);

// ARRAYS PROPERTIES
// console.log(years.length); // Number of elements in the array
// Get last element in the array
// console.log(friends[friends.length - 1]);

// ARRAY METHODS

// Add element to the end of the array, push() always return new lenght
// console.log(years);
years.push(2050);
// console.log(years);

// Add element to the beginning of the array, also returns the lenght is needed
years.unshift(1950);
// console.log(years);

// Remove and return last element
const poppedElement = years.pop();
// console.log(years);
// console.log({ poppedElement });

// Remove and return first element
const shiftedElement = years.shift();
// console.log(years);
// console.log({ shiftedElement });

// Return index of element, If doesn't exist, returns -1
// console.log(myInfo.indexOf('Mertens'));
// console.log(myInfo.indexOf('Moreno'));

// Check if elements exist in the array, returns true or false
// console.log(myInfo.includes('Mertens'));
// console.log(myInfo.includes('Moreno'));

if (myInfo.includes(firstName)) {
  // console.log('My first name is', myInfo[0]);
}

// OBJECTS

// Objects contain keys and values
// Values can be any expression
console.log('>>> OBJECTS');

// Object literal syntax
const profile = {
  firstName: 'Carlos',
  lastName: 'Mertens',
  birthYear: 1980,
  friends,
  hasDriverLicense: false,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }. He has ${this.hasDriverLicense ? 'a' : 'not'} driver license`;
  },
};
console.log(profile);

// Getting values out
console.log(profile['firstName']); // Inside [] goes an expression
console.log(profile.lastName);

// const res = prompt('Choose: first name, last name, age, friends');
// profile[res] ? console.log(profile[res]) : console.log('Wrong option!');

// Add key and value to the object
profile.job = 'Developer';
profile['location'] = 'Berlin';
console.log(profile);

// Exercise
// Display: "x has x friends and the best friend is x"

console.log(
  `${profile.firstName} has ${profile.friends.length} friends and his best friend is ${profile.friends[1]}`
);

// OBJECT METHODS

// Create method to calculate age using this keyword

// console.log(profile.calcAge());
console.log(profile['calcAge']()); // Only calculate age once
console.log(profile);

// Exercise
// Create a method getSummary
console.log(profile.getSummary());
