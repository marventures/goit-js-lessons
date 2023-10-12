/* 
Example 2 - Storagе

Write a Storage class that creates objects for managing a warehouse of goods. When called, it will receive one argument - the initial array of goods, and write it to the items property.

Add class methods:

getItems() - returns an array of products.
addItem(item) - receives a new product and adds it to the end of the current ones.
removeItem(item) - receives the product and, if it exists, removes it from the current.

*/

class Storage {
  // write code below this line
  // write code above this line
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
