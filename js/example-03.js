/* 
Example 3 -Calculator

Create a calculator object with three methods:

read(a, b)- takes two values and stores them as object properties.
add() - returns the sum of the stored values.
mult() - multiplies the stored values and returns the result.
*/

const calculator = {
  a: 0,
  b: 0,

  // write code below this line
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
  divide() {
    return this.a / this.b;
  },
  subtract() {
    return this.a - this.b;
  },
  // write code above this line
};

calculator.read(3, 5);
console.log(calculator);
console.log(calculator.add());
console.log(calculator.mult());
console.log(calculator.divide());
console.log(calculator.subtract());
