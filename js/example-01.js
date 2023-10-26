/* Example 1 - Event Propagation */

// 3 Stages = Capturing > Target > Bubbling

const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');
const bodyEl = document.body;

// event propagation start and ends with window object
window.addEventListener('click', e => {
  alert('Window object clicked');

  // console.log('Current Target:', e.currentTarget); // currentTarget -> element currently processed/executed
  // console.log('Target:', e.target); // element where event happened
});

document.addEventListener('click', e => {
  alert('Document object clicked');

  // console.log('Current Target:', e.currentTarget);
  // console.log('Target:', e.target);
});

bodyEl.addEventListener('click', e => {
  alert('Body element clicked');

  // console.log('Current Target:', e.currentTarget);
  // console.log('Target:', e.target);
});

outerDiv.addEventListener('click', e => {
  alert('Outer Div clicked');

  // console.log('Current Target:', e.currentTarget);
  // console.log('Target:', e.target);
});

innerDiv.addEventListener('click', e => {
  alert('Inner Div clicked');

  // console.log('Current Target:', e.currentTarget);
  // console.log('Target:', e.target);
  // e.stopPropagation(); // halts  “bubbling” of events “up” through the DOM
});
