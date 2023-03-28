'use strict';

// Data to practice destructuring
// CASE 1:
const restaurant = {
  title: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // Method that returns an array
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructure Object With 1 Argument
  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Order for delivery: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivery to ${address} at ${time}`
    );
  },

  // Method to display the use of spread operator
  makePasta: function (ing1, ing2, ing3) {
    console.log(`Pasta ordered with ${ing1}, ${ing2} and ${ing3}`);
  },

  // Method to display the use of rest operator
  orderPizza: function (mainIng, ...otherIng) {
    console.log(`Pizza ordered with ${mainIng}`);
    console.log(`Other toppings:`, otherIng);
  },
};

/* ////////// DESTRUCTURING ARRAYS ///////// */
console.log('>>> DESTRUCTURING ARRAYS');

// Basics
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log('Old way:', a, b, c);

const [x, y, z] = arr;
console.log('Modern way:', x, y, z);

// CASE 1:

// Get first 2 elements of the categories
const [first, second] = restaurant.categories;
console.log('Categories (0, 1):', first, second);

// Get first and last elements of the third
const [categ1, , categ3] = restaurant.categories;
console.log('Categories (0, 2)', categ1, categ3);

// Swap Elements In An Array
let [primary, secondary] = restaurant.categories;
console.log(primary, secondary);
// const temp = primary;
// primary = secondary;
// secondary = temp;
[primary, secondary] = [secondary, primary];
console.log(primary, secondary);

// Destructure Function/Method Call
const [starter, main] = restaurant.order(2, 1);
console.log('My order:', starter, main);

// Destructure Nested Arrays
const arrNested = [0, 1, [4, 5]];

const [, uno, [dosCero, dosUno]] = arrNested;
console.log(uno, dosCero, dosUno);

// Destructure Default Values (When we not know the length of the array)
const arrUnknown = [8, 9];

const [p, q, r] = arrUnknown;
console.log(p, q, r); // r will be undefined because it does not exist
const [defaultP = 1, defaultQ = 0, defaultR = 0] = arrUnknown;
console.log(defaultP, defaultQ, defaultR);

/* ////////// DESTRUCTURING OBJECTS ///////// */
console.log('>>> DESTRUCTURING OBJECTS');

// CASE 1:
const { title, categories, openingHours } = restaurant;
console.log(title, categories, openingHours);

const {
  title: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, tags, hours);

// Destructure Default Values
const {
  menu = [],
  salatMenu: course0 = [],
  mainMenu: course2 = [],
} = restaurant;
console.log({ menu }, { course0 }, { course2 });

// Destructure Mutation
let aa = 999;
let bb = 777;
const obj1 = { aa: 21, bb: 22, cc: 23 };
console.log({ aa }, { bb });
({ aa, bb } = obj1);
console.log({ aa }, { bb });

// Destructure Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log({ open }, { close });

// Destructure Object With 1 Parameter
restaurant.orderDelivery({
  time: '19:00',
  address: 'Ollenhauser 90',
  mainIndex: 1,
  starterIndex: 0,
});

/* ////////// SPREAD OPERATOR ///////// */
console.log('>>> SPREAD OPERATOR');

// Spread operator can be use on iterables (arrays, strings, maps, sets)
// Objects are not iterable but the keys can be spread
// Spread operators are used only when building and array
// or pass on a function

// Bad example
const arr1 = [7, 8, 9];
const newArr1 = [1, 2, arr1[0], arr1[1], arr1[2]]; // add to more elements

// Good example using spread operator
const arr2 = [0, 1, 2];
const newArr2 = [-2, -1, ...arr2];
console.log(newArr2);
console.log(...newArr2);
console.log([...newArr2, 3, 4, 5]);

// Manipulating existing menu in object restaurant
// Shallow Copies
const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);
console.log(restaurant.mainMenu); // note that object was not changed

// Merge
const mergeArr = [...arr1, ...arr2];
console.log(mergeArr);

const menuFull = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuFull);

// Use with string
const str = 'carlos';
const letters = [...str];
console.log(letters);

// Use with function
// Create a method in restaurant to make pasta with 3 ingredients
const ingredients = ['fussile', 'red sauce', 'zuccinni'];
restaurant.makePasta(...ingredients);

// Use with object. Note taht the order no matter
const newRestaurant = { owner: 'Mertens', ...restaurant, yelpStar: 4 };
console.log(newRestaurant);
console.log(restaurant); // note that original object was not changed

/* ////////// REST PATTERN ///////// */
console.log('>>> REST PATTERN');

// Rest operator works inverse from spread operator
// Rest pattern helps packing/condensing elements

const arr3 = [0, 1, 2, 3, 4, 5];
const [restA, restB, ...restOthers] = arr3;
console.log({ restA }, { restB }, { restOthers });

// Using Rest and Spread operators at the same time
// note that literally condense the rest after las variable
// in the following example, Bruschetta will be lost
const [item1, , item2, ...otherFoods] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(item1, item2, otherFoods);

// Rest pattern with Objects
const { sat, ...weekday } = restaurant.openingHours;
console.log({ sat });
console.log({ weekday });

// Rest pattern with functions - REST PARAMETERS
function add(...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
add(2, 3);
add(5, 5, 5);
add(1, 1, 2, 2, 4, 5, 10);
add(...arr3);

// Example with restaurant object
restaurant.orderPizza('tomato sauce', 'cheese', 'ham', 'pineapple');

/* ////////// SHORT CIRCUITING ///////// */
console.log('>>> SHORT CIRCUITING');

// Short circuiting evaluation with || (or opertor) takes the first
// true value and return it
console.log(3 || 'carlos');
console.log('' || 'carlos');
console.log(true || 1);
console.log(undefined || null);
console.log(null || undefined);
console.log(undefined || 0 || '' || 'Hello' || null || 23);
console.log(false || false);

// Use case
// note that if restaurant.numGuests = 0, will create a bug

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log({ guests1 });

// it will short circuit if false to the next statement
const guests2 = restaurant.numGuests || 10;
console.log({ guests2 });

// Short circuiting evaluation with && (and opertor) takes the first
// falsy value and return it
console.log(0 && true);
console.log('object' && 0 && 1);
console.log(null && 'carlos');

// Use case
if (restaurant.orderPizza) {
  restaurant.orderPizza('ham', 'pineaple', 'green pepper');
}

// it will short circuit if true to next statement
restaurant.orderPizza && restaurant.orderPizza('ham', 'pineaple');

/* ////////// NULLISH COALESCING OPERATOR ///////// */
console.log('>>> NULLISH COALESCING OPERATOR');

// ?? operator was introduce on ES2020
// check for nullish values (null and undefined) and not falsy values

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests ?? 10;
console.log({ guests3 });

/* ////////// LOGICAL ASSIGNMENT OPERATORS ///////// */
console.log('>>> LOGICAL ASSIGNMENT OPERATORS');

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'Roma',
  owner: 'Carlos Mertens',
  workers: 0,
};

// OR ASSIGNMENT OPERATOR
// Assign the value if it is falsy
// If rest1.numGuests exist with 0, will create a bug because 0 is falsy
rest1.numGuests ||= 15; // rest1.numGuests = rest1.numGuests || 15;
rest2.numGuests ||= 15; // rest2.numGuests = rest2.numGuests || 15;

// console.log(rest1);
// console.log(rest2);

// NULLISH ASSIGNMENT OPERATOR
// Assign the value if it is nullish (null or undefined)
rest1.workers ??= 2; // rest1.workers = rest1.workers || 15;
rest2.workers ??= 2; // rest2.workers = rest2.workers || 15;

// console.log(rest1);
// console.log(rest2);

// AND ASSIGNMENT OPERATOR
// Assign the value if it is truety
rest1.owner &&= 'Anonymous'; // rest1.owner = rest1.owner && 'Anonymous';
rest2.owner &&= 'Anonymous'; // rest2.owner = rest2.owner && 'Anonymous';
console.log(rest1);
console.log(rest2);

/* ////////// FOR OF LOOP ///////// */
console.log('>>> FOR OF LOOP');

// Iterate Array with For Of loop
for (const item of menuFull) console.log('Item:', item);

// Get index with For Of loop
for (const item of menuFull.entries()) console.log(item);

for (const [i, item] of menuFull.entries()) {
  console.log(`${i}: ${item}`);
}

/* ////////// ENHANCED OBJECT LITERALS ///////// */
console.log('>>> ENHANCED OBJECT LITERALS');

const animals = {
  fox: 3,
  camel: 2,
  tiger: 1,
};

const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const zoo = {
  name: 'Berlin Zoo',
  address: 'Thatever Street',
  // Case1: don't need to declare variable name and value
  animals,
  // Case2: Method declaration simplified
  buyTicket(num) {
    console.log(`Confirmed! You have bought ${num} tickets`);
    console.log(this);
  },
  // Case3: we can compute on the property name
  daysOpen: {
    [week[0]]: '8 - 18',
    [week[2]]: '8 - 18',
    [`day-${7 - 2}`]: '8 - 18',
    [week[6]]: '8 - 18',
  },
};

zoo.buyTicket(2);

// CASE 2:
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
