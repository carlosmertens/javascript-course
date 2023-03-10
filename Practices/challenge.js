'use strict';
/* ///////////////////////////////
 ********** CODING CHALLENGE #1 **********

Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]
GOOD LUCK 😀

*/
console.log('***** CODING CHALLENGE 1 *****');

// Sub problems
// 1) need to loop trough every item in array
// 2) breakdown the string that need to be repetitive

function printForecast(arr) {
  let result = '...';

  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
    result += ` ${arr[i]}c in ${i + 1} days ...`;
  }
  console.log({ result });

  return result;
}

printForecast([12, 5, -5, 0, 4]);
