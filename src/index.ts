import { addTodo } from "./assets/todos";
import { newTodoBtn, newTodoInput } from "./dom-utils";
import { validateInput } from "./validator";

function initApp() {
  newTodoBtn.disabled = true;
  newTodoBtn.addEventListener("click", addTodo);
  newTodoInput.addEventListener("input", validateInput);
}

initApp();
