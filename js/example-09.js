/* 
Example 9 - forEach method
Make the code refactoring using forEach method and arrow functions.

*/

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

function calсulateAverage(...args) {
  let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  args.forEach(el => (total += el));
  return total / args.length;
}

// write code below this line

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
