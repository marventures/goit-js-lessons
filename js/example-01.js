/* Example 1 ('Click' event & event.currentTarget) */

const showCT = document.getElementById('showCT');

showCT.addEventListener('click', event => {
  console.log(event); //
  console.log(event.type); // event type // in this case it's the click event
  console.log(event.currentTarget); // event.currentTarget -> is the element on which the event handler is executed
});
