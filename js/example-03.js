/* Example 3 - Promise.race(), Promise.all() */

const sleep = ms =>
  new Promise((resolve, reject) => {
    if (ms > 5000) {
      reject(`Error: Sleep time (${ms} ms) is too long.`);
    } else {
      setTimeout(() => resolve(ms), ms);
    }
  });

// ----------------------------------------------

// // Promise.race() -> returns FIRST/FASTEST fulfilled promise
// Promise.race([sleep(2000), sleep(5000), sleep(500), sleep(200), sleep(6000), sleep(10000)])
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.error('Error in Promise.race:', error);
//   });

// ----------------------------------------------

// Promise.all -> returns ALL fulfilled promise
Promise.all([sleep(2000), sleep(5000), sleep(3500)])
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.error('Error in Promise.all:', error);
  });

// ----------------------------------------------

// // NOTE: For both Promise.race and Promise.all()
// When at least one promise from the array is rejected -> will go to rejected state -> will throw an error
