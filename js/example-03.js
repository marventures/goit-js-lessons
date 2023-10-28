/* Example 3 - Debounce (leading and trailing) */

const nameInput = document.getElementById('nameInput');

const handleInputDebounce = function (e) {
  console.log(e.target.value);
};

nameInput.addEventListener(
  'input',
  _.debounce(handleInputDebounce, 1000, {
    leading: true,
    trailing: false,
  })

  // third parameter in debounce {leading (default false) and trailing (default true)}

  // leading:true -> will be triggered at the BEGINNING of event stream
  // trailing:true -> will be triggered at the END of event stream AFTER PAUSE
);
