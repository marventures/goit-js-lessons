/* Example 4 - Date and Time */

// const date = new Date(); // Date and Time at its initialization time
// console.log('Date: ', date);

// console.log(new Date(0));

// Number of ms since midnight January 1, 1970
console.log(Date.now());

// ---------------------------------------------------------------

// Setting date

// new Date('2030-03-16');
// new Date('2030-03');
// new Date('2018');
// new Date('03/16/2030');
// new Date('2030/03/16');
// new Date('2030/3/16');
// new Date('March 16, 2030');
// new Date('March 16, 2030 14:25:00');
// new Date('2030-03-16 14:25:00');
// new Date('2030-03-16T14:25:00');
// new Date('16 March 2030');
// ---------------------------------------------------------------

// const date = new Date();
// console.log('Date: ', date);

// // Returns day of month from 1 to 31
// console.log('getDate(): ', date.getDate());

// // // Returns day of week from 0 to 6
// console.log('getDay(): ', date.getDay());

// // // Returns month from 0 to 11
// console.log('getMonth(): ', date.getMonth());

// // // Returns 4-digit year
// console.log('getFullYear(): ', date.getFullYear());

// // // Returns hour
// console.log('getHours(): ', date.getHours());

// // // Returns minutes
// console.log('getMinutes(): ', date.getMinutes());

// // // Returns seconds
// console.log('getSeconds(): ', date.getSeconds());

// // // Returns milliseconds
// console.log('getMilliseconds(): ', date.getMilliseconds());

// ---------------------------------------------------------------

// // Subtracting Dates
// const start = new Date('2030-04-23');
// const end = new Date('2030-05-17');

// console.log(end - start); // number in ms
