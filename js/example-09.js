/* 
Example 9 -Collection of courses (includes, indexOf, push, etc.)

Write 3 function declarations to work with the courses collection of training courses:

1. addCourse(newCourse) - adds a course to the end of the collection
2. removeCourse(name) - removes a course from the collection
3. updateCourse(oldName, newName) - changes the name to a new one

*/

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
console.log(courses);

// 1. addCourse(newCourse) - adds a course to the end of the collection

function addCourse(newCourse) {
  // write code below this line
  courses.push(newCourse);
}

// call addCourse
addCourse('MySQl');
console.log(courses);

//////////////////////////////////////////////////////////////////////////

// 2. removeCourse(name) {}
function removeCourse(name) {
  // write code below this line
  const courseIndex = courses.indexOf(name);

  courses.splice(courseIndex, 1);
}

// call removeCourse
removeCourse('JavaScript');
console.log(courses);

//////////////////////////////////////////////////////////////////////////

// 3. updateCourse(oldName, newName) {}

// function updateCourse(oldName, newName) {
//   // write code below this line
//   const courseIndex = courses.indexOf(oldName);

//   courses[courseIndex] = newName;
// }

// // call updateCourse

// updateCourse('MySQL', 'JavaScript');
// console.log(courses);
