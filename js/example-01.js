/* 
Example 1 - Body mass index (Function Declaration)

Write a function calcBMI(weight, height) using Function Declaration that calculates and returns the body mass index of a person. To do this, divide the weight in kilograms by square of a person's height in meters.

The weight and height will be specially passed as strings. Non-integer numbers can be specified as 24.7 or 24.7, i.e. a comma can be used as a decimal separator.

Body mass index must be rounded to one decimal place;

*/

// weight/height^2

function calcBMI(weight, height) {
  // write code below this line
  const parsedWeight = weight.replace(',', '.');

  return (parsedWeight / height ** 2).toFixed(1);
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
