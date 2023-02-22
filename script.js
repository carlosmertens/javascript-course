console.log('***** Lessons *****');
// ********** VALUES AND VARIABLES ********** //
// Variable declaration: let, const and var
// let: variables that can be changed (mutable) [block scoupe]
// underscore and dollar sign are only allowed characters in variables
// All capital letter for unchanged variables
// const: variables that can not be change (immutable)
// var: old ways, try to avoid it. Work similar to let [function scoupe]

let js = 'amazing';
let firstName = 'Carlos'; // 'Carlos' is a value
let carlos_nicole = 'CN';
let $function = 27;

const birthYear = 1980;
const PI = 3.1416;

var job = 'waiter';
job = 'programmer';

// ********** OPERATORS ********** //
// types: mathematic, comparison, logical, assignment, etc

// MATHEMATIC
// arithmetic operatos (+, -, * and /) - to the power of: **
let currentYear = 2023;
console.log(currentYear - birthYear);
// console.log(40 + 8 + 23 - 10);
// console.log(2 ** 3)

// plus sign can use to concatenate String
console.log(firstName + ' ' + js);

// COMPARISON
// use to create boolean values with (>, <, >=, <=)
// if (js === 'amazing') alert('Javascript is FUN!');
if (js === 'amazing') console.log('Javascript is FUN!');

// ASSIGNMENT
// equal operator: it is execute after the value assignment
let x = 10 + 5; // 15, equal operator will assign the value after the sum

// x = x + 5
x += 5; // 20, can be use with any arithmetic operator

x++; // x = x + 1

// OPERATOR PRECEDENCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// ********** DATA TYPES ********** //
// typeof: an operator to read the type of the value

// PRIMITIVE DATA TYPES

// JS has dynamic typing so we dont need to manually define the data type
// In JS the value has a type and not the variable as in other programming languages
//

// Numbers: "floating point numbers" -> use for decimals and integers
let age = 23;
let height = 1.65;

// String: use for text
let message = 'Hello world!';
// console.log(typeof message);

// Boolean: logical type that can be true or false
let ageOverLimit;
// console.log(typeof ageOverLimit);

// Undefined: use for variavle value that is not yet defined
let children;
// console.log({ children });

// Null: use for empty value
let uniFinished = null;
// console.log({ uniFinished });

// Symbol: unique value and can not be change

// BigInt: use for larger integer then Number can hold

// Dynamic typing (change the value of a variable)
ageOverLimit = 21;
// console.log(typeof ageOverLimit);

// OBJECT DATA TYPES
