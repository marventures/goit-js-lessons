/* Example 1 - JSON and Handling Errors in JSON*/

console.log('before try catch');

try {
  const data = '{"name":"John", "age":30, "car":null}';
  console.log(JSON.parse(data)); // JSON.parse() converts json to a js object
} catch (err) {
  console.error(err.message);
}

console.log('after try catch');
