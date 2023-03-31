const days = document.querySelector("#days") as HTMLInputElement;
const growthrate = document.querySelector("#growthrate") as HTMLInputElement;
const start = document.querySelector("#start") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLSpanElement;

function addInputListeners() {
  days.addEventListener("input", calculateRate);
  growthrate.addEventListener("input", calculateRate);
  start.addEventListener("input", calculateRate);
  days.addEventListener("input", updateDaysView);
}

export { days, growthrate, start, result, addInputListeners };
