/* Example 2 - setTimeout() and clearTimeout */

const button = document.querySelector('button');

// setTimeout(callback, delay, arg1, arg2, ...)
const onClick = () => {
  const timerID = setTimeout(() => {
    console.log('I love async JS!');
  }, 2000);

  console.log(timerID);
  // clearTimeout cancels the timeout
  // clearTimeout(timerID);
};

button.addEventListener('click', onClick);
