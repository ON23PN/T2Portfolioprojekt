const newTodoInput = document.querySelector(
  "#newTodoInput"
) as HTMLInputElement;
const newTodoBtn = document.querySelector("#newTodoBtn") as HTMLButtonElement;
const validatorMessage = document.querySelector(
  "#validatorMessage"
) as HTMLSpanElement;
const todosContainer = document.querySelector(
  "#todosContainer"
) as HTMLDivElement;

export { newTodoInput, newTodoBtn, todosContainer, validatorMessage };
