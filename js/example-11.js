/* 
Example 11 - The for loop

Write a for loop that prints numbers in ascending order to the browser console from min to max, but only if the number is a multiple of 5.

const max = 100;
const min = 20;
// Write for loop code here
*/

const max = 100;
const min = 20;
// Write for loop code here

// for(initialization;condition;post/iteration){}

for (let i = 0; i <= 1000; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
