/* Example 4 - Date and Time */

const date = new Date(); // Date and Time at its initialization time
console.log('Date: ', date);

// Returns day of month from 1 to 31
console.log('getDate(): ', date.getDate());

// Returns day of week from 0 to 6
console.log('getDay(): ', date.getDay());

// Returns month from 0 to 11
console.log('getMonth(): ', date.getMonth());

// Returns 4-digit year
console.log('getFullYear(): ', date.getFullYear());

// Returns hour
console.log('getHours(): ', date.getHours());

// Returns minutes
console.log('getMinutes(): ', date.getMinutes());

// Returns seconds
console.log('getSeconds(): ', date.getSeconds());

// Returns milliseconds
console.log('getMilliseconds(): ', date.getMilliseconds());

// ---------------------------------------------------------------
// Number of ms since midnight January 1, 1970
// console.log(Date.now());

// ---------------------------------------------------------------

// Subtracting Dates
// const start = new Date('2030-04-23');
// const end = new Date('2030-05-17');

// console.log(end - start); // number in ms
