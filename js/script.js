import { saveTask, loadTasks, updateTask, deleteTask } from './mock-api.js';

////////////////////////////////////////////////////

const addBtnEl = document.getElementById('addBtn');
const myUL = document.getElementById('myUL');
const myInput = document.getElementById('myInput');

////////////////////////////////////////////////////

let currentId = 1;

function addCloseButton(li) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
}

function createLi(text, isDone = false, id = currentId) {
  const liEl = document.createElement('LI');
  const liText = document.createTextNode(text);
  liEl.appendChild(liText);
  liEl.dataset.id = id;
  if (isDone) liEl.className = 'checked';
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}

function addNewTask() {
  const inputValue = myInput.value.trim();
  if (inputValue === '') {
    alert('You must write something!');
    return;
  }
  createLi(inputValue);
  myInput.value = '';
  addTaskToDB(inputValue);
}

addBtnEl.addEventListener('click', addNewTask);

/////////////////////////////////////////////////////

function handleTaskBehavior({ target }) {
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');

    // UPDATE
    updateTask(target.dataset.id, target.classList.contains('checked'));
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();

    // DELETE
    deleteTask(target.parentNode.dataset.id);
  }
}

myUL.addEventListener('click', handleTaskBehavior);

/////////////////////////////////////////////////////

const createTaskObject = (text, isDone) => ({ text, isDone });

function addTaskToDB(text, isDone = false) {
  const newTask = createTaskObject(text, isDone);
  // CREATE
  saveTask(newTask);
  currentId += 1;
}

/////////////////////////////////////////////////////

function fillTasksList() {
  // READ
  loadTasks()
    .then(todos => {
      todos.forEach(({ text, isDone, id }) => createLi(text, isDone, id));
      console.log(todos);
      return todos;
    })
    .then(todos => {
      currentId = todos.length === 0 ? 1 : Number(todos[todos.length - 1].id) + 1;
    });
}

window.addEventListener('DOMContentLoaded', fillTasksList);
