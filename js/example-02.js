/* 
Example 2 - Object.values() method

We have an object that stores our team salaries. 
Write code for summing all salaries and store the result in the sum variable. 
Should get 390.

*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// write code below this line
const valuesArr = Object.values(salaries);
console.log(valuesArr);

let sum = 0;
for (const value of valuesArr) {
  sum += value;
}

console.log(sum);
