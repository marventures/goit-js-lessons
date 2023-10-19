/* EXAMPLE 1 */

// const list = document.getElementById('list');
// console.log(list);
// const list = document.querySelector('#list');
// console.log(list);

// if (list) {
//   console.log(list.children.length);
// } else {
//   console.log("this element doesn't exist");
// }

// ! ====================================

/* EXAMPLE 2 
Create a list of technologies studied in the Fullstack course using js. 
Show how it is done with the help of **map** and **reduce** 

    1. Create a container for ul tag
    2. Create a cycle for sorting array elements
    3. Create a li tag
    4. Write the text from the array into the li tag
    5. Place li inside of ul
    6. Place ul tag with items on the page
*/

// const container = document.getElementById('container');
// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.createElement('ul');

//* 2.A (for...of loop)
// for (const technology of technologies) {
//   const liEl = document.createElement('li');
//   liEl.textContent = technology;
//   list.append(liEl);
// }
// container.append(list); // append() -> adds one or more elements after all children of the container element.

//* 2.B (map)
// const listContent = technologies.map(technology => `<li>${technology}</li>`).join('');
// console.log(listContent);
// // list.innerHTML = listContent;
// list.insertAdjacentHTML('beforeend', listContent); // present-day method for adding a string with HTML tags
// container.append(list);

//* 2.C (reduce)
// const listContent = technologies.reduce((acc, technology) => (acc += `<li>${technology}</li>`), '');
// list.insertAdjacentHTML('beforeend', listContent);
// container.append(list);

//! ====================================

/* EXAMPLE 3.
Create several buttons based on an array of objects using createElement

    1. Iterate through the array of colors using a loop
    2. Create a button
    3. Set the background color of the button
    4. Set the text of the button
    5. Add a button to the document

*/

// const colors = [
//   {
//     label: 'red',
//     color: '#FF0000',
//   },
//   {
//     label: 'green',
//     color: '#00FF00',
//   },
//   {
//     label: 'blue',
//     color: '#0000FF',
//   },
//   {
//     label: 'yellow',
//     color: '#FFFF00',
//   },
// ];

// colors.forEach(({ label, color }) => {
//   const buttonEl = document.createElement('button');
//   buttonEl.style.backgroundColor = color;
//   buttonEl.classList.add('indents');
//   buttonEl.style.margin = '5px';
//   buttonEl.textContent = label;
//   container.append(buttonEl);
// });
