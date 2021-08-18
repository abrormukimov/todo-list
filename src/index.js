import _ from 'lodash';
import './style.css';

const todoTasks = [
  {
    description: 'Have breakfast',
    completed: false,
    index: 1
  },
  {
    description: 'go to college',
    completed: false,
    index: 2
  },
  {
    description: 'meet my girlfriend',
    completed: false,
    index: 3
  }
];

addTitle();
addForm();
addTodos();
clearAll();

function addTodos() {
  for (let i = 0; i < todoTasks.length; i++) {
    const ul = document.createElement('ul');
    ul.classList.add('todo-ctn');
    document.querySelector('.main-ctn').appendChild(ul);

    let checkbox = document.createElement('input');
    const desc = document.createElement('li');
    const dots = document.createElement('i');
    desc.innerText = `${todoTasks[i].description}`;

    checkbox.type = 'checkbox';
    dots.classList.add('fas');
    dots.classList.add('fa-ellipsis-v');

    ul.appendChild(checkbox);
    ul.appendChild(desc);
    ul.appendChild(dots);  
  }
}

function addTitle() {
  const titleCtn = document.createElement('div');
  titleCtn.classList.add('title-ctn');
  const title = document.createElement('h1');
  title.innerText = "Today's todo list";
  title.setAttribute('class', 'title');
  document.querySelector('.main-ctn').appendChild(titleCtn);
  titleCtn.appendChild(title);
}

function addForm() {
  const form = document.createElement('form');
  const input = document.createElement('input');
  form.classList.add('form');
  input.classList.add('input');
  input.placeholder = 'Add to your list...';
  document.querySelector('.main-ctn').appendChild(form);
  form.appendChild(input);
}

function clearAll() {
  const div = document.createElement('div');
  div.innerText = 'Clear all completed';
  div.classList.add('clear-all');
  document.querySelector('.main-ctn').appendChild(div);
}