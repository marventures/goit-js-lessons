/* 
Example 1 - Object Basics

Write a script that, for the user object, successively:

1. Adds a mood field with value 'happy' using dot notation
2. Replaces the value hobby to 'skydiving' using dot notation
3. Replaces premium to false using bracket notation
4. Prints the contents of the user object in <key> - <value> format using Object.keys() and for...of loop
5. Prints the contents of the user object in <key> - <value> format using for...in loop
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: ['html', 'css', 'javascript'],
  premium: true,
  // 1: 'test',
};

// write code below this line

// 1.
user.mood = 'happy';
console.log(user);

// 2.
user.hobby = 'skydiving';
console.log(user);

// 3.
user['premium'] = false;
console.log(user);

// user[1] = 'i am replaced';
// console.log(user);

// console.log(user.hobby);

// 4.
const keysArr = Object.keys(user);
console.log(keysArr);

for (const key of keysArr) {
  console.log(`${key} - ${user[key]}`);
}

// 5.
for (const key in user) {
  console.log(`${key} - ${user[key]}`);
}
