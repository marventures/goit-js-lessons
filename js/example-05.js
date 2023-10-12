/* 
Example 5 - Toggle

Write a Toggle class that takes a settings object {isOpen: boolean} and declares one property on - state on/off (true/false). 
*/

class Toggle {
  // write code below this line
  // write code above this line
}

const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
