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
//Util functions

function setValidatorMesssage(msg: string, error = false) {
  validatorMessage.innerHTML = msg;
  if (error) {
    validatorMessage.style.color = "red";
  } else {
    validatorMessage.style.color = "initial";
  }
}

export { newTodoInput, newTodoBtn, todosContainer, setValidatorMesssage };
