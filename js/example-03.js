/* Example 3 - service for localStorage */

import { save, load } from './storage.js';

const formData = {
  email: 'aaa@gmail.com',
  message: 'hi',
};

save('feedback-form-state', formData);

const data = load('feedback-form-state').message;

console.log(data);
