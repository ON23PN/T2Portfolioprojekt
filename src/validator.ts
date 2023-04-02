import { newTodoBtn, newTodoInput, validatorMessage } from "./dom-utils";

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

/** Set Message of the validator */
function setValidatorMesssage(msg: string, error = false) {
  validatorMessage.innerHTML = msg;
  if (error) {
    validatorMessage.style.color = "red";
  } else {
    validatorMessage.style.color = "initial";
  }
}

const ValidatorMessages = {
  INPUT_EMTPY: "You must type something!",
  INPUT_VALID: "Great, Press the Button or 'Enter' to add",
};

export { validateInput };
