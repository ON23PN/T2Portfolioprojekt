import { newTodoBtn, newTodoInput, setValidatorMesssage } from "./dom-utils";

function validateInput() {
  if (!newTodoInput.value) {
    newTodoBtn.disabled = true;
    setValidatorMesssage(ValidatorMessages.INPUT_EMTPY, true);
    return false;
  }
  // Validated succesfully
  else {
    newTodoBtn.disabled = false;
    setValidatorMesssage(ValidatorMessages.INPUT_VALID);
    return true;
  }
}

enum ValidatorMessages {
  INPUT_EMTPY = "You must type something!",
  INPUT_VALID = "Great, Press the Button to add",
}

export { validateInput };
