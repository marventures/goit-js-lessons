/* Example 2 - Capturing Phase (using true parameter) vs Bubbling Phase */

for (let elem of document.querySelectorAll('*')) {
  elem.addEventListener('click', e => alert(`Capturing (diving): ${elem.tagName}`), true); // When the third parameter is set to true, it indicates that the event should be handled during the capturing phase.

  elem.addEventListener('click', e => alert(`Bubbling (emersion): ${elem.tagName}`));
}
