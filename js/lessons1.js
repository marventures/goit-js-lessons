// call method
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Mango',
// };
// const poly = {
//   username: 'Poly',
// };

// greetGuest.call(mango, 'Welcome'); // Welcome, Mango.
// greetGuest.call(poly, 'Welcome back'); // Welcome back, Poly.

// apply method -> similar to call but takes an array
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Mango',
// };
// const poly = {
//   username: 'Poly',
// };

// greetGuest.apply(mango, ['Welcome']); // Welcome, Mango.
// greetGuest.apply(poly, ['Welcome back']); // Welcome back, Poly.

// bind method() -> you can create a new name for that function
function greet(clientName) {
  return `${clientName}, welcome to «${this.service}».`;
}

const steam = {
  service: 'Steam',
};
const steamGreeter = greet.bind(steam);

console.log(steamGreeter('Mango')); // "Mango, welcome to «Steam»."

const gmail = {
  service: 'Gmail',
};

const gmailGreeter = greet.bind(gmail);
console.log(gmailGreeter('Poly')); // "Poly, welcome to «Gmail»."
