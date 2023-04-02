import { newTodoInput, todosContainer } from "./dom-utils";
import { Todo } from "./types/interfaces";
import { validateInput } from "./validator";

let todos: Todo[] = [];

function addTodo() {
  if (!validateInput) {
    return; // if input is not valid, we wont add a new todo by returning here
  }

  const newTodo: Todo = {
    description: newTodoInput.value,
    // generate a new id in the format UNIXTIMESTAMP-rn-999
    id: `${Date.now()}-rn-${Math.floor(Math.random() * 999)}`,
    finished: false,
  };
  todos.push(newTodo);
  reloadTodos();
}

function deleteTodo(id: string) {
  // let all todos pass except the one with the id that will be deleted
  todos = todos.filter((todo: Todo) => todo.id !== id);
  reloadTodos();
}

function reloadTodos() {
  //empty the todos list
  todosContainer.innerHTML = "";
  // Iterate through Todos to refresh HTML
  todos.forEach((todo) => {
    //create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.innerHTML = "X";

    //create container for todo
    const singleTodoContainer = document.createElement("div");
    singleTodoContainer.innerHTML = `
    <p id="${todo.id}">
    ${todo.description}</p>
    `;
    //get the delete btn in
    singleTodoContainer.appendChild(deleteBtn);
    //append it to the wrapper
    todosContainer.appendChild(singleTodoContainer);
    //separator between each item
    todosContainer.appendChild(document.createElement("hr"));
  });
}

export { addTodo, deleteTodo, reloadTodos };
