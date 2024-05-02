// Imports use relative file paths or Node.js package names
//import { textInput } from './dom-utils';
import './styles/styles.css';
//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE

// init App
//textInput.addEventListener('input', (e) => {
    //log input value
   // console.log((e.target as HTMLInputElement).value);
//})

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
    // Noch mehr Lebensmittel hinzufügen
};

document.addEventListener("DOMContentLoaded", () => {
    const berechnenBtn = document.getElementById("berechnenBtn");
    if (berechnenBtn) {
        berechnenBtn.addEventListener("click", berechnen);
    } else {
        console.error("Berechnen Button wurde nicht gefunden.");
    }
});

function berechnen() {
    const lebensmittelAuswahl = document.querySelector("#lebensmittel") as HTMLSelectElement;
    const anzahlInput = document.querySelector("#anzahl") as HTMLInputElement;
    const ergebnisDiv = document.querySelector("#ergebnis") as HTMLElement;

    if (!lebensmittelAuswahl || !anzahlInput || !ergebnisDiv) {
        console.error("Ein oder mehrere Elemente konnten nicht gefunden werden.");
        return;
    }

    const ausgewähltesLebensmittel = lebensmittel[lebensmittelAuswahl.value];
    const anzahl = parseFloat(anzahlInput.value);

    if (!ausgewähltesLebensmittel || isNaN(anzahl) || anzahl <= 0) {
        ergebnisDiv.innerHTML = "Bitte wähle ein gültiges Lebensmittel und gib eine gültige Menge ein.";
        return;
    }

    const kalorien = (ausgewähltesLebensmittel.kalorienPro100Gramm / 100) * anzahl;
    const proteine = (ausgewähltesLebensmittel.proteinePro100Gramm / 100) * anzahl;
    const fett = (ausgewähltesLebensmittel.fettPro100Gramm / 100) * anzahl;

    ergebnisDiv.innerHTML = `
        <p>Kalorien: ${kalorien.toFixed(2)}</p>
        <p>Proteine: ${proteine.toFixed(2)}g</p>
        <p>Fett: ${fett.toFixed(2)}g</p>
    `;
}
