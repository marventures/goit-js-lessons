/* Example 3 Event Delagation */

const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');

// ❌ we're individually adding event listeners to each <li> element. This approach becomes inefficient
item1.addEventListener('click', () => {
  item1.classList.toggle('highlight');
});

item2.addEventListener('click', () => {
  item2.classList.toggle('highlight');
});

item3.addEventListener('click', () => {
  item3.classList.toggle('highlight');
});

item4.addEventListener('click', () => {
  item4.classList.toggle('highlight');
});

item5.addEventListener('click', () => {
  item5.classList.toggle('highlight');
});

//!=================================================================

// EVENT DELEGATION -> can use because of event bubbling

// const parentList = document.getElementById('parent-list');

// const handleClick = e => {
//   if (e.target && e.target.nodeName === 'LI') {
//     e.target.classList.toggle('highlight');
//   }
// };

//✅ When a click event occurs on any of the list items, the event bubbles up to the <ul> element
//✅ we AVOID adding individual event listeners to each <li> element, which can be inefficient

// parentList.addEventListener('click', handleClick);
