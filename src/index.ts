import {
  addInputListeners,
  days,
  growthrate,
  result,
  start,
} from "./dom-utils";

growthrate.value = "1.1";
start.value = "1";
days.value = "1";

const daysView = document.querySelector("#daysView");

function updateDaysView() {
  daysView!.innerHTML = days.value;
}
function calculateRate() {
  const rate = Math.floor(
    +start.value * Math.pow(+growthrate.value, +days.value)
  );
  result.innerHTML = `${rate}`;
}

function initApp() {
  addInputListeners();
  calculateRate();
}

initApp();
