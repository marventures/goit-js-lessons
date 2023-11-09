/* Example 2 - Local Storage Basics */

// 1. Saving to localStorage (setItem)

// A. (string value)
localStorage.setItem('ui-theme', 'light');
localStorage.setItem('sidebar', 'expanded');
localStorage.setItem('notification-level', 'mute');

// B. (object value -> need to stringify (Js Object -> json))
const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem('settings', JSON.stringify(settings));

// ------------------------------------

// 2. Reading from a localStorage (getItem)

// // A. (string value)
// const theme = localStorage.getItem('ui-theme');
// console.log(theme); // "light"

// // B. (object value -> need to parse (JSON to JS Object))
// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

// -------------------------------------

// 3. Removing from localStorage (removeItem)
// localStorage.removeItem('ui-theme');

// -------------------------------------

//  4. Clearing from localStorage (clear)
// // clear method removes all -> not safe
// localStorage.clear();
