'use strict';
/* ********** STRICT MODE ********** */
// Help us avoid bugs in the code
// Help us avoid rerserve variable names

/* ********** FUNCTIONS ********** */

// FUNCTION DECLARATION
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
const calculateAge = function (yearBorn) {
  const currentYear = 2023;
  return currentYear - yearBorn;
};
const myAge = calculateAge(1980);
