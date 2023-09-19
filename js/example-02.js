/* 
Example 2 - Arrays and Strings

- Write a script to calculate the area of a rectangle with sides, whichvalues values are stored in the values variable as a string. 
- Values guaranteed separated by a space.

const values = '8 11';

*/

const values = '8 11';
const arr = values.split(' ');
console.log(arr);

// first value
const firstValue = arr[0];
console.log(firstValue);

// last value
const lastValue = arr[arr.length - 1];
console.log(lastValue);

const total = firstValue * lastValue;
console.log(total);
