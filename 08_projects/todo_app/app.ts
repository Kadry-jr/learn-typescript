let todos: string[] = [];

function addTodo(): void {
  const input = document.getElementById("task") as HTMLInputElement;
  if (input.value) {
    todos.push(input.value);
    render();
    input.value = "";
  }
}

function render(): void {
  const list = document.getElementById("list") as HTMLUListElement;
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    li.onclick = () => removeTodo(index);
    list.appendChild(li);
  });
}

function removeTodo(index: number): void {
  todos.splice(index, 1);
  render();
}