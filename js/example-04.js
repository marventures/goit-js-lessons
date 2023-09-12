/* 
Example 4 - Math class

Write a script that prints to the console rounded up/down, etc. values of variable value. 
Use the methods Math.floor(), Math.ceil() and Math.round().Check what happens in the console for the values "27.3" and "27.9".

const value = 27.5; 
*/

const value = 27.9;
// Math.floor -> just take the whole number/ round down always
console.log(Math.floor(value));

// Math.ceil-> just take the whole number/ round up always
console.log(Math.ceil(value));

// Math.round -> applies to mathematics rounding/ round off /// 1-4 round down // 5-9 round up
console.log(Math.round(value));
