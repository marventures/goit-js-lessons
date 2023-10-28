/* Example 1 - Throttle (Scroll Events) */

const outputScrollDefault = document.getElementById('outputScrollDefault');
const outputScrollThrottling = document.getElementById('outputScrollThrottling');

const eventScrollCounter = {
  default: 0,
  throttled: 0,
};

// Default Scroll
document.addEventListener('scroll', () => {
  eventScrollCounter.default += 1;
  outputScrollDefault.textContent = eventScrollCounter.default;
});

// Scroll with Throttling
document.addEventListener(
  'scroll',
  _.throttle(() => {
    eventScrollCounter.throttled += 1;
    outputScrollThrottling.textContent = eventScrollCounter.throttled;
  }, 1500)
  // underscore (_) in _.throttle means that this method came from lodash library
  // second parameter of the throttle method is time in milliseconds
);
