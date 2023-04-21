import { addEintrag, getGesamtbetrag, rechnung } from "./rechnung";
import {
  addBtn,
  rechnungContainer,
  rechnungGesamtbetragContainer,
} from "./utils/dom-utils";
import { Euro } from "./utils/number-formatter";

function renderRechnung() {
    rechnungContainer.innerHTML = '';
  rechnung.forEach((rechnungEl) => {
    const liEl = document.createElement("LI");
    liEl.classList.add("rechnung-eintrag");
    liEl.innerHTML = `
        <p>Beschreibung: ${rechnungEl.beschreibung}</p>
        <p>Betrag: <strong>${Euro.format(rechnungEl.betrag)}</strong></p>
        `;
    rechnungContainer.appendChild(liEl);
  });

  renderGesamtbetrag();
}

function renderGesamtbetrag() {
  const gesamt = getGesamtbetrag();
  rechnungGesamtbetragContainer.innerHTML = Euro.format(gesamt);
}

function initApp() {
  renderRechnung();
  addBtn.addEventListener("click", () => {
    addEintrag();
    renderRechnung();
  });
}
initApp();
