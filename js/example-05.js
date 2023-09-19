/* 
Example 5 - Arrays and Strings

Write a script that prints to the console all the words of a string except the first and the last one.
The resulting string must not start or end whitespace character.The script should work for any line.

const string = 'Welcome to the future';
*/

// const string = 'Welcome to the future';
// const words = string.split(' ');
// console.log(words);

// // removes first el
// words.shift();
// console.log(words);

// // removes last el
// words.pop();
// console.log(words);

// // join string
// const newStr = words.join(' ');
// console.log(newStr);

const string = 'Welcome to the future';
const words = string.split(' ');
console.log(words);

console.log(words.slice(1, 3).join(' '));
