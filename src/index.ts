import { addBtn, addXIconToTodos, makeTodosCheckable, startingTodos, todoInput, todoList, xIconText } from "./dom-utils";
// Create a new list item when clicking on the "Add" button
function addNewTodo() {
  const li = document.createElement("li");
  const inputValue = todoInput.value;
  li.innerText = todoInput.value;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    todoList.appendChild(li);
  }
  todoInput.value = "";

  const span = document.createElement("SPAN");
  span.className = "close"; // needed for the queryselector
  span.innerText = (xIconText); // represents the x
  li.appendChild(span); // adds the x to the todo-item

  addXIconToTodos();
  makeTodosCheckable();
}

function initTodoList(){
  addXIconToTodos();
  makeTodosCheckable();
  addBtn.onclick = () => addNewTodo();
}
initTodoList(); // initializes the App

// add following line as bonus at the end
window.addEventListener('keydown',(e: KeyboardEvent)=> e.key === 'Enter' && todoInput === document.activeElement && addNewTodo()); // add as bonus at the end
