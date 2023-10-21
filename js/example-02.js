/* Example 2 ('Submit' event on forms)*/

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // avoids refreshing the web page upon submitting the form
  event.preventDefault();

  // prettier-ignore
  const { elements: { login, password }} = event.currentTarget;
  console.dir(event.currentTarget);

  // const login = event.currentTarget.elements.login;
  // const password = event.currentTarget.elements.password;

  if (login.value === '' || password.value === '') {
    return console.log('Please fill in all the fields!');
  }
  console.log(`Login: ${login.value}, Password: ${password.value}`);

  // reset the form upon submission
  event.currentTarget.reset();
}
