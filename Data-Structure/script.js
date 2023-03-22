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
};

// Test  Destructure Object With 1 Parameter
restaurant.orderDelivery({
  time: '19:00',
  address: 'Ollenhauser 90',
  mainIndex: 1,
  starterIndex: 0,
});

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

//

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

// CASE 2:
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
