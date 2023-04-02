import { addTodo } from "./todos";
import { newTodoBtn, newTodoInput } from "./dom-utils";
import { validateInput } from "./validator";

function initApp() {
  newTodoBtn.disabled = true;
  newTodoBtn.addEventListener("click", addTodo);
  newTodoInput.addEventListener("input", validateInput);
  newTodoInput.addEventListener("keydown", hasPressedEnterKeyOnTodoInput);
}

function hasPressedEnterKeyOnTodoInput(e: KeyboardEvent) {
  if (e.key === "Enter") {
    addTodo(); // try to add a todo by pressing the enter key on the keyboard
  }
}

initApp(); // init everything
