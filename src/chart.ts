import Chart from "chart.js/auto";
import { chartCanvas } from "./dom-utils";

// Dokumentation - s. V4.2.1 https://www.chartjs.org/docs/latest/charts/line.html
export const chart = new Chart<"line">(chartCanvas, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        label: "Infizierte nach x Tagen",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  }
});

export function resetChart() {
  chart.data.labels = [];
  chart.data.datasets[0].data = [];
}
/**
 * update datasets with the given data
 * Array Index of labels has to be aligned with data attributes
 * e.g labels: ["one", "two"], data: [1,2]
 */
export function updateChart(label: number, data: number) {
  chart.data.labels!.push(label);
  chart.data.datasets[0].data.push(data);
  chart.update();
}
