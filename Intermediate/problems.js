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
const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function cleaningData(temp) {
  let cleanData = [];
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] === 'number') cleanData.push(temp[i]);
  }
  return cleanData;
}

function tempAmplitude(temp) {
  const cleanTemp = cleaningData(temp);
  const amplitude = Math.max(...cleanTemp) - Math.min(...cleanTemp);
  return amplitude;
}

console.log(tempAmplitude(temp));
