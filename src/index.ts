import { addInputListeners, days, growthrate, start } from "./dom-utils";
import { calculateRate } from "./formula";

growthrate.value = "1.1";
start.value = "1";
days.value = "1";

function initApp() {
  addInputListeners();
  calculateRate();
}
initApp();
