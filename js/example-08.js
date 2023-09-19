/* 
Example 8 - Search for an element
    
Write a script to find the smallest number in an array. The code should work for any array of numbers. Use a loop to solve problems.

const numbers = [2, 17, 94, 1, 23, 37];
let min;
console.log(min); // 1
*/

const numbers = [1, 2, 3, 4, 5];
let min = numbers[0]; //assume the first element as the initial minimum
/* 
for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
} */

for (const number of numbers) {
  if (number < min) {
    min = number;
  }
}

console.log(min);

const names = ['Jed', 'Jesus', 'Christine', 'Dons'];

for (const name of names) {
  console.log(name);
}
