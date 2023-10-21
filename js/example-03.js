/* Example 3 ('This' on event listeners, 'Keydown' event & removeEventListener method) */

const mango = {
  username: 'Mango',
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

// ✅ It's working // 'this' will refer to mango object
mango.showUsername();

const btn = document.querySelector('.js-btn');

// ❌ 'this' will refer to the ELEMENT itself (button) if you use showUsername as the callback
btn.addEventListener('click', mango.showUsername); // does not work

// ✅ Don't forget to bind the context of the object's methods
// btn.addEventListener('click', mango.showUsername.bind(mango));

//!========================================================

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

//!========================================================

// const btn = document.querySelector('.js-btn');

// btn.addEventListener('click', handleClick);

// let counter = 0;

// function handleClick(e) {
//   counter++;
//   console.log(counter);
//   if (counter === 5) {
//     btn.removeEventListener('click', handleClick);
//   }
// }
