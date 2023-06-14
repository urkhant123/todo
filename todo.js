// HTML elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Array to store the list of todos
let todos = [];

// Function to render the todo list
function renderTodoList() {
  // Clear the existing todo list
  todoList.innerHTML = '';

  // Create a list item for each todo
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
      <span class="todo-text">${todo}</span>
      <button class="delete-button" data-index="${index}">Delete</button>
    `;
    todoList.appendChild(todoItem);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    todos.push(todoText);
    renderTodoList();
    todoInput.value = '';
  }
}

// Function to handle delete button click
function handleDeleteButtonClick(event) {
  if (event.target.classList.contains('delete-button')) {
    const index = event.target.dataset.index;
    todos.splice(index, 1);
    renderTodoList();
  }
}

// Event listeners
todoForm.addEventListener('submit', handleFormSubmit);
todoList.addEventListener('click', handleDeleteButtonClick);
