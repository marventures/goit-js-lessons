/* 
Example 6 - Arrays and Strings

Write a script that "unwraps" a string (reverse letter order) and prints it to the console.

const string = 'Welcome to the future';

*/
const string = 'Welcome to the future';

const arr = string.split('');
console.log(arr);

const reverse = arr.reverse();
console.log(reverse);

const result = reverse.join('');
console.log(result);

// second way -> method chaining
const result2 = string.split('').reverse().join('');
console.log(result2);
