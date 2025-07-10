"use strict";
let todos = [];
function addTodo() {
    const input = document.getElementById("task");
    if (input.value) {
        todos.push(input.value);
        render();
        input.value = "";
    }
}
function render() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo;
        li.onclick = () => removeTodo(index);
        list.appendChild(li);
    });
}
function removeTodo(index) {
    todos.splice(index, 1);
    render();
}
