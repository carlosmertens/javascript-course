'use strict';
/* ********** STRICT MODE ********** */
// Help us avoid bugs in the code
// Help us avoid rerserve variable names

/* ********** FUNCTIONS ********** */

// FUNCTION DECLARATION
// Can be used before being declare
logger();
function logger() {
  // Function body. Write your code here...
  console.log(`My name is Carlos!`);
}
// Invoking, calling or running the function
logger();

// Function with parameters
function mixJuicer(fruitOne, fruitTwo, fruitThree) {
  const juice = `Make mix juice with ${fruitOne}, ${fruitTwo}, ${fruitThree}. Thanks!`;
  return juice;
}
// Invoke function with arguments
console.log(mixJuicer('apples', 'carrots', 'oranges'));

// FUNCTION EXPRESSIONS
// A function value stored in a variable
const calculateAge = function (yearBorn) {
  const currentYear = 2023;
  return currentYear - yearBorn;
};
const myAge = calculateAge(1980);

// ARROW FUNCTION
// arrow functions do noit get "this" keyword
const ageBy2050 = (yearBorn) => 2050 - yearBorn;
console.log(ageBy2050(1980));

const yearsUntilRetirement = (yearBorn, retirementAge) => {
  // Invoking a function inside a function
  const age = calculateAge(yearBorn);
  const years = retirementAge - age;
  // Return value conditionally
  if (years > 0) {
    console.log(`${years} more years to retire`);
    return years;
  } else {
    console.log('Already retired! 🎉');
    return -1;
  }
};
console.log(yearsUntilRetirement(1950, 65));
