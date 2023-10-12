/* 
Example 1 - Blogger

Write a Blogger class to create a blogger object with the following properties:

email - mail, line
age - age, number
numberOfPosts - number of posts, number
topics - an array of topics the blogger specializes in
The class expects one parameter - object of settings with the same name properties.

Add a getInfo() method that returns string: User ${email} is ${age} years old and has ${number of posts} posts.

Add the updatePostCount(value) method, which in the value parameter takes number of posts to add to the value parameter.
*/

class Blogger {
  // write code below this line
  constructor({ email, age, numberOfPosts, topics }) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
  // write code above this line
}

// Instantiation (class instance)
const mango = new Blogger({
  email: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  email: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
