let form = document.querySelector('form');
let todoList = document.querySelector('ul');
let button = document.querySelector('button');
let input = document.getElementById('user-todo-list');
let todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

localStorage.setItem('todos', JSON.stringify(todosArray));

let storage = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', function (e) {
    e.preventDefault();
    todosArray.push(input.value);
    localStorage.setItem('todos', JSON.stringify(todosArray));
    todoMaker(input.value);
    input.value = '';
})

let todoMaker = function (text) {
    let todo = document.createElement('li');
    todo.textContent = text;
    todoList.appendChild(todo);
}

storage.forEach(elem => todoMaker(elem));

button.addEventListener('click', function () {
    localStorage.clear();
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
});
