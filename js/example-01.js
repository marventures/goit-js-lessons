/* Example 1 - Synchronous code vs Asynchronous code */

// Synchronous
// console.log('First log');
// console.log('Second log');
// console.log('Third log');

// ---------------------------------------------------------------

// Asynchronous (setTimeout)
// Will run first
console.log('A');

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log('B');
}, 2000);

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log('C');
}, 1500);

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log('E');
}, 0);

// Will run second
console.log('D');
