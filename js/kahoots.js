const userA = {
  username: 'Mango',
  age: 20,
};

const userB = userA;
userB.age = 30;
console.log(userA.age, userB.age);
