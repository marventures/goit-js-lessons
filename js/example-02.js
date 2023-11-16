/* Example 2 - Event Loop in Practice */

// 1. Scenario 1

console.log('A');

// setTimeout
setTimeout(() => {
  console.log('B');
}, 0);

const promise = new Promise((resolve, reject) => {
  resolve('C');
});

// Consuming the Promise
promise.then(value => {
  console.log(value);
});

console.log('D');

// A > D > C > B

// 1. console.log
// 2. Promise
// 3. setTimeout(Async)

////////////////////////////////////////////////////////////////

// 2. Scenario 2: Promise Object

// console.log('A');

// Promise.resolve('B')
//   .then(value => console.log(value))
//   .catch(() => console.log('C'))
//   .finally(() => console.log('D'));

// console.log('E');

// // 1. console.logs
// // 2. resolve -> check 'then' value  || reject -> check 'catch'
// // 3. finally()

////////////////////////////////////////////////////////////////

// const promise1 = new Promise((resolve, reject) => {
//   reject('Whoops');
// });

// promise1.then(value => console.log(value));

// will throw an error -> should use catch
