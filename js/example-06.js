/* 
Example 6 - String methods and chaining

Write a script that calculates a person's body mass index. For this you need to divide the weight in 
kilograms by the square of the person's height in meters.

Weight and height are stored in the weight and height variables, but not as numbers, 
but in as strings(specially for the task).Non - integer numbers can be given as 24.7 or 24, 7, that is, 
as a separator of the fractional part can be comma. 

The body mass index should be rounded to one decimal place;

const weight = '88,3';
const height = '1.75';

const convertedWeight = ;
const convertedHeight = ;

const bmi = ;
console.log(bmi); // 28.7
*/

const weight = '88.75';
const height = '1.75';

const convertedWeight = parseFloat(weight);
console.log(convertedWeight);
const convertedHeight = parseFloat(height);
console.log(convertedHeight);

// const bmi = ;
// console.log(bmi); // 28.7
