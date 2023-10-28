/* Example 2 - Throttle (Resize Events) */

const outputResizeDefault = document.getElementById('outputResizeDefault');
const outputResizeThrottling = document.getElementById('outputResizeThrottling');

const eventResizeCounter = {
  default: 0,
  throttled: 0,
};

// DEFAULT RESIZE
window.addEventListener('resize', () => {
  eventResizeCounter.default += 1;
  outputResizeDefault.textContent = eventResizeCounter.default;
});

// THROTTLED RESIZE
window.addEventListener(
  'resize',
  _.throttle(() => {
    eventResizeCounter.throttled += 1;
    outputResizeThrottling.textContent = eventResizeCounter.throttled;
  }, 1500)
);
