/* 
Example 7 - forEach method

Make the code refactoring using forEach method and arrow functions.
 */

const logItems = items => {
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }

  // items.forEach(function (el, idx) {
  //   console.log(`${idx} - ${el}`);
  // });

  items.forEach((el, idx) => {
    console.log(`${idx + 1} - ${el}`);
  });
};

// write code below this line

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
