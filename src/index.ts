import { days, growthrate, start } from "./dom-utils";
import { calculateRate } from "./formula";

growthrate.value = "1.1";
start.value = "1";
days.value = "1";

function addInputListeners() {
  days.addEventListener("input", calculateRate);
  growthrate.addEventListener("input", calculateRate);
  start.addEventListener("input", calculateRate);
}

function initApp() {
  addInputListeners();
  calculateRate();
}
initApp();
function updateDaysView(this: HTMLInputElement, ev: Event) {
  throw new Error("Function not implemented.");
}
