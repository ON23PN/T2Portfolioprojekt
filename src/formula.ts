import {  resetChart, updateChart } from "./chart";
import { result, start, growthrate, days } from "./dom-utils";

export function calculateRate() {
    resetChart(); // chart natürlich resetten, sondern wird es immer größer
    const daysVal = +days.value
    const growthrateVal = +growthrate.value
    const startVal = +start.value
    result.innerHTML = Math.floor(
        startVal * Math.pow(growthrateVal,daysVal)
    ).toString(); // wieder zu string machen, damit es im HTML korrekt rauskommt

    for(let i=1; i<=+daysVal; i++){
        const res = Math.floor( // Math floor macht einen ganzen Integer drauß
            startVal * Math.pow(growthrateVal,i) // Das ist die Formel zu Berechnung start*wachstumsrate^Tage
        )
        updateChart(i, res); // und hier wird das Chart geupdated
    }
    
}