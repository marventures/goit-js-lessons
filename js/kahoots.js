// 7.
// arrow fn don't have local variable 'arguments'
const add = (...rest) => {
  console.log(rest);
};
add(1, 2, 3); // [1, 2, 3]

// this will work:
// function add2() {
//   console.log(arguments);
// }

// add2(1, 2, 3); // [1, 2, 3]

const foo = a => a;

console.log(foo());
