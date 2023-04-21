const rechnungContainer = document.querySelector(
  "#rechnungContainer"
) as HTMLOListElement;
const rechnungGesamtbetragContainer = document.querySelector(
  "#rechnungGesamtbetrag"
) as HTMLSpanElement;
const inputBeschreibung = document.querySelector(
  "#beschreibung"
) as HTMLInputElement;
const inputBetrag = document.querySelector("#betrag") as HTMLInputElement;
const addBtn = document.querySelector("#addBtn") as HTMLButtonElement;

export { rechnungContainer, rechnungGesamtbetragContainer, inputBeschreibung, inputBetrag, addBtn };
