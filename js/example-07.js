/* 
Example 7 - forEach method

Make the code refactoring using forEach method and arrow functions.
 */

function logItems(items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

// write code below this line

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
