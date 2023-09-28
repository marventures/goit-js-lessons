const profile = {
  username: 'Mango',
  age: 2,
};

const profileUpdate = {
  username: 'Poly',
};

const updatedProfile = {
  ...profile, //   {username: 'Mango', age: 2}
  ...profileUpdate, // {username: 'Poly'}
};

//

const array = [1, 2, 3, 4, 5];

const array2 = [...array]; // [1,2,3,4,5]

console.log(array === array2);
