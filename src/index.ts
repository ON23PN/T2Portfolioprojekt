import './styles/styles.css';

interface Lebensmittel {
    name: string;
    kalorienPro100Gramm: number;
    proteinePro100Gramm: number;
    fettPro100Gramm: number;
}

const lebensmittel: { [key: string]: Lebensmittel } = {
    apfel: { name: "Apfel", kalorienPro100Gramm: 52, proteinePro100Gramm: 0.26, fettPro100Gramm: 0.17 },
    banane: { name: "Banane", kalorienPro100Gramm: 89, proteinePro100Gramm: 1.09, fettPro100Gramm: 0.33 },
    hühnchen: { name: "Hühnchen", kalorienPro100Gramm: 239, proteinePro100Gramm: 27.3, fettPro100Gramm: 13.4 }
    // Weitere Lebensmittel hier hinzufügen
};

let tageszielKalorien: number = 0; 
let tageszielProteine: number = 0; 
let tageszielFette: number = 0; 
let bereitsVerbrauchteKalorien: number = 0; 
let bereitsVerbrauchteProteine: number = 0; 
let bereitsVerbrauchteFette: number = 0; 

document.addEventListener("DOMContentLoaded", () => {
    const berechnenBtn = document.getElementById("berechnenBtn");
    if (berechnenBtn) {
        berechnenBtn.addEventListener("click", berechnen);
    } else {
        console.error("Berechnen Button wurde nicht gefunden.");
    }

    const mahlzeitSpeichernBtn = document.getElementById("mahlzeitSpeichernBtn");
    if (mahlzeitSpeichernBtn) {
        mahlzeitSpeichernBtn.addEventListener("click", () => {
            const mahlzeitNameInput = document.getElementById("mahlzeitName") as HTMLInputElement;
            if (mahlzeitNameInput) {
                const mahlzeitName: string = mahlzeitNameInput.value;
                console.log("Mahlzeit gespeichert:", mahlzeitName);
            } else {
                console.error("Mahlzeit-Name-Eingabefeld wurde nicht gefunden.");
            }
        });
    }

const kalorienzielInput = document.getElementById("kalorienziel") as HTMLInputElement;
const kalorienzielDiv = document.getElementById("kalorienzielDiv");
let kalorienzielAnzeige = kalorienzielDiv?.querySelector(".ziel-anzeige") as HTMLElement | null;
if (kalorienzielInput && kalorienzielDiv) {
    kalorienzielInput.addEventListener("input", () => {
        tageszielKalorien = parseFloat(kalorienzielInput.value);
        updateVerbleibendeKalorien();

        if (!kalorienzielAnzeige) {
            kalorienzielAnzeige = document.createElement("div");
            kalorienzielAnzeige.classList.add("ziel-anzeige");
            kalorienzielDiv.appendChild(kalorienzielAnzeige);
        }

        if (kalorienzielAnzeige) {
            kalorienzielAnzeige.innerText = `Tägliches Kalorienziel: ${tageszielKalorien}`;
        }
    });
}

const proteinezielInput = document.getElementById("proteineziel") as HTMLInputElement;
const proteinezielDiv = document.getElementById("proteinezielDiv");
let proteinezielAnzeige = proteinezielDiv?.querySelector(".ziel-anzeige") as HTMLElement | null;
if (proteinezielInput && proteinezielDiv) {
    proteinezielInput.addEventListener("input", () => {
        tageszielProteine = parseFloat(proteinezielInput.value);
        updateVerbleibendeProteine();

        if (!proteinezielAnzeige) {
            proteinezielAnzeige = document.createElement("div");
            proteinezielAnzeige.classList.add("ziel-anzeige");
            proteinezielDiv.appendChild(proteinezielAnzeige);
        }

        if (proteinezielAnzeige) {
            proteinezielAnzeige.innerText = `Tägliches Proteinziel: ${tageszielProteine}`;
        }
    });
}

const fettzielInput = document.getElementById("fettziel") as HTMLInputElement;
const fettzielDiv = document.getElementById("fettzielDiv");
let fettzielAnzeige = fettzielDiv?.querySelector(".ziel-anzeige") as HTMLElement | null;
if (fettzielInput && fettzielDiv) {
    fettzielInput.addEventListener("input", () => {
        tageszielFette = parseFloat(fettzielInput.value);
        updateVerbleibendeFette();

        if (!fettzielAnzeige) {
            fettzielAnzeige = document.createElement("div");
            fettzielAnzeige.classList.add("ziel-anzeige");
            fettzielDiv.appendChild(fettzielAnzeige);
        }

        if (fettzielAnzeige) {
            fettzielAnzeige.innerText = `Tägliches Fettziel: ${tageszielFette}`;
        }
    });
}

});

function berechnen(): void {
    const lebensmittelAuswahl = document.querySelector("#lebensmittel") as HTMLSelectElement;
    const anzahlInput = document.querySelector("#anzahl") as HTMLInputElement;
    const berechneteTabelleBody = document.getElementById("berechneteTabelleBody");

    if (!lebensmittelAuswahl || !anzahlInput || !berechneteTabelleBody) {
        console.error("Ein oder mehrere Elemente konnten nicht gefunden werden.");
        return;
    }

    const selectedFood = lebensmittel[lebensmittelAuswahl.value];
    const quantity = parseFloat(anzahlInput.value);
    
    const kalorien = selectedFood.kalorienPro100Gramm * (quantity / 100);
    const proteine = selectedFood.proteinePro100Gramm * (quantity / 100);
    const fett = selectedFood.fettPro100Gramm * (quantity / 100);

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${selectedFood.name}</td>
        <td>${quantity}</td>
        <td>${kalorien.toFixed(2)}</td>
        <td>${proteine.toFixed(2)}</td>
        <td>${fett.toFixed(2)}</td>
    `;
    berechneteTabelleBody.appendChild(newRow);

    bereitsVerbrauchteKalorien += kalorien; 
    bereitsVerbrauchteProteine += proteine; 
    bereitsVerbrauchteFette += fett; 

    updateVerbleibendeKalorien();
    updateVerbleibendeProteine();
    updateVerbleibendeFette();
}

function updateVerbleibendeKalorien(): void {
    const verbleibendeKalorien: number = tageszielKalorien - bereitsVerbrauchteKalorien;
    const verbleibendeKalorienDiv = document.getElementById("verbleibendeKalorien");
    if (verbleibendeKalorienDiv) {
        verbleibendeKalorienDiv.innerText = `Verbleibende Kalorien: ${verbleibendeKalorien.toFixed(2)}`;
    }
}

function updateVerbleibendeProteine(): void {
    const verbleibendeProteine: number = tageszielProteine - bereitsVerbrauchteProteine;
    const verbleibendeProteineDiv = document.getElementById("verbleibendeProteine");
    if (verbleibendeProteineDiv) {
        verbleibendeProteineDiv.innerText = `Verbleibende Proteine: ${verbleibendeProteine.toFixed(2)}`;
    }
}

function updateVerbleibendeFette(): void {
    const verbleibendeFette: number = tageszielFette - bereitsVerbrauchteFette;
    const verbleibendeFetteDiv = document.getElementById("verbleibendeFette");
    if (verbleibendeFetteDiv) {
        verbleibendeFetteDiv.innerText = `Verbleibende Fette: ${verbleibendeFette.toFixed(2)}`;
    }
}
