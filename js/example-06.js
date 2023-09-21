/* 
Example 6 - Finding the largest element (Function Declaration and Spread Operator)
Write a function findLargestNumber(numbers) using Function Declaration that looks for the largest number in array.

*/

// spread operator (unpack) -> used in function calls, array literals, and object literals.

function findLargestNumber(numbers) {
  // write code below this line
  return Math.max(...numbers);
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
