'use strict';

/* ///////////////////////////////
 ********** CODING PROBLEM #1 ********** 
Using Google, StackOverflow and MDN

We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

1) Understanding the problem
- What is temp amplitude? Answer: difference between highest and lowest temp
- How to compute max and min temperatures?
- What's a sensor error? And what do do?
2) Breaking up into sub-problems
- How to ignore errors?
- Find max value in temp array
- Find min value in temp array
- Subtract min from max (amplitude) and return it
*/
console.log('***** CODING PROBLEM #1 *****');

// Test data
const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function calcAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const temp = temps[i];
    if (typeof temp !== 'number') continue;
    if (temp > max) max = temp;
    if (temp < min) min = temp;
  }
  return max - min;
}

const amp = calcAmplitude(temps);
console.log({ amp });

/* ///////////////////////////////
 ********** CODING PROBLEM #2 ********** 

Function should now receive 2 arrays of temps
1) Understanding the problem
- With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
2) Breaking up into sub-problems
- Merge 2 arrays
*/

function cleanData(temps) {
  let result = [];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'number') result.push(temps[i]);
  }
  return result;
}

function calcTempsAmplitute(temps1, temps2) {
  const mergeTemps = temps1.concat(temps2);
  const cleanTemps = cleanData(mergeTemps);
  return Math.max(...cleanTemps) - Math.min(...cleanTemps);
}

const amplitute = calcTempsAmplitute(
  [1, 2, 3, 5, 'error'],
  ['error', -1, -2, 0]
);
console.log({ amplitute });
