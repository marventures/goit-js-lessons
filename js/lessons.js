'use strict';

// 1. this in global scope ->  window without "use strict" and undefined with "use strict"
// function foo() {
//   console.log(this);
// }

// foo();

// 2. this in object method -> object calling the method(petya object)
const petya = {
  username: 'Petya',
  showThis() {
    console.log(this);
  },
};

petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}

// // 3. this in arrow functions
// const arrowThis = () => console.log(this); // whether strict or not -> windows always!
// arrowThis();
