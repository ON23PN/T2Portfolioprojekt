import { calculateRate } from "./formula";
const days = document.querySelector("#days") as HTMLInputElement;
const growthrate = document.querySelector("#growthrate") as HTMLInputElement;
const start = document.querySelector("#start") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLSpanElement;
const daysView = document.querySelector("#daysView");

days.addEventListener("input", updateDaysView);

function updateDaysView() {
  daysView!.innerHTML = days.value;
}

export { days, growthrate, start, result };
