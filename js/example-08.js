/* 
Example 8 - Logical operators
What will be the result of the expressions?

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);
*/

// logical && operator  -> stumbles on false and returns it, if both are true, it will return the last value
// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && 'kiwi'); // 'kiwi'
// console.log(true && 0 && 'kiwi'); // 0

// logical || operator -> returns the first true value
// console.log(true || 3); //true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0); //false// null > 0 //  type casting-> null becomes 0 // 0 > 0

// console.log(null || (2 && 3) || 4); //3
