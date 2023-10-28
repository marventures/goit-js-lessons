/* Example 4 - Debounce (Form Validation) */

const CORRECT_INPUT_LENGTH = {
  min: 3,
  max: 15,
};

const CLASS_NAMES = {
  wrong: 'wrong',
  correct: 'correct',
};

const signInForm = document.getElementById('signInForm');

signInForm.addEventListener(
  'input',
  _.debounce(e => {
    if (
      e.target.value.trim().length < CORRECT_INPUT_LENGTH.min ||
      e.target.value.trim().length > CORRECT_INPUT_LENGTH.max
    ) {
      e.target.classList.remove(CLASS_NAMES.correct);
      e.target.classList.add(CLASS_NAMES.wrong);
    } else {
      e.target.classList.remove(CLASS_NAMES.wrong);
      e.target.classList.add(CLASS_NAMES.correct);
    }
  }, 800)
);
