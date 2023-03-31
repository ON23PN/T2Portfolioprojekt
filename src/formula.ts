import { start, growthrate, days, result } from "./dom-utils";

export function calculateRate() {
  const rate = Math.floor(
    +start.value * Math.pow(+growthrate.value, +days.value)
  );
  result.innerHTML = `${rate}`;
}
