import './styles/styles.css';
import { Lebensmittel } from './types';


//Lebensmittel Datenbank
let lebensmittel: { [key: string]: Lebensmittel } = {
    apfel: { name: "Apfel", kalorienPro100Gramm: 52, proteinePro100Gramm: 0.26, fettPro100Gramm: 0.17 },
    banane: { name: "Banane", kalorienPro100Gramm: 89, proteinePro100Gramm: 1.09, fettPro100Gramm: 0.33 },
    hühnchen: { name: "Hühnchen", kalorienPro100Gramm: 239, proteinePro100Gramm: 27.3, fettPro100Gramm: 13.4 },
    spinat: { name: "Spinat", kalorienPro100Gramm: 23, proteinePro100Gramm: 2.9, fettPro100Gramm: 0.4 },
    lachs: { name: "Lachs", kalorienPro100Gramm: 206, proteinePro100Gramm: 20.4, fettPro100Gramm: 13.6 },
    vollkornbrot: { name: "Vollkornbrot", kalorienPro100Gramm: 247, proteinePro100Gramm: 9.5, fettPro100Gramm: 3.5 },
    erdnüsse: { name: "Erdnüsse", kalorienPro100Gramm: 567, proteinePro100Gramm: 25.8, fettPro100Gramm: 49.2 },
    joghurt: { name: "Joghurt", kalorienPro100Gramm: 59, proteinePro100Gramm: 3.5, fettPro100Gramm: 3.3 },
    karotten: { name: "Karotten", kalorienPro100Gramm: 41, proteinePro100Gramm: 0.9, fettPro100Gramm: 0.2 },
    quinoa: { name: "Quinoa", kalorienPro100Gramm: 120, proteinePro100Gramm: 4.4, fettPro100Gramm: 1.9 },
    avocado: { name: "Avocado", kalorienPro100Gramm: 160, proteinePro100Gramm: 2, fettPro100Gramm: 15 },
    haferflocken: { name: "Haferflocken", kalorienPro100Gramm: 389, proteinePro100Gramm: 13, fettPro100Gramm: 6.9 },
    brokkoli: { name: "Brokkoli", kalorienPro100Gramm: 34, proteinePro100Gramm: 2.8, fettPro100Gramm: 0.4 },
    tomate: { name: "Tomate", kalorienPro100Gramm: 18, proteinePro100Gramm: 0.9, fettPro100Gramm: 0.2 },
    kartoffel: { name: "Kartoffel", kalorienPro100Gramm: 77, proteinePro100Gramm: 2, fettPro100Gramm: 0.1 },
    thunfisch: { name: "Thunfisch", kalorienPro100Gramm: 116, proteinePro100Gramm: 26, fettPro100Gramm: 1 },
    möhren: { name: "Möhren", kalorienPro100Gramm: 41, proteinePro100Gramm: 0.9, fettPro100Gramm: 0.2 },
    paprika: { name: "Paprika", kalorienPro100Gramm: 31, proteinePro100Gramm: 1.3, fettPro100Gramm: 0.3 },
    zucchini: { name: "Zucchini", kalorienPro100Gramm: 16, proteinePro100Gramm: 1.2, fettPro100Gramm: 0.2 },
    linsen: { name: "Linsen", kalorienPro100Gramm: 116, proteinePro100Gramm: 9, fettPro100Gramm: 0.5 }
};

let tageszielKalorien: number = 0; 
let tageszielProteine: number = 0; 
let tageszielFette: number = 0; 
let bereitsVerbrauchteKalorien: number = 0; 
let bereitsVerbrauchteProteine: number = 0; 
let bereitsVerbrauchteFette: number = 0; 

//Funktion zum hinzufügen der benutzerdefinierten Lebensmittel
function hinzufügenBenutzerdefiniertesLebensmittel(lebensmittelName: string, kalorien: number, proteine: number, fett: number) {
    const lowercaseName = lebensmittelName.toLowerCase();

    // Hinzufügen des neuen benutzerdefinierten Lebensmittels zur Auswahl in der Berechnungsfunktion
    const lebensmittelAuswahl = document.getElementById("lebensmittel") as HTMLSelectElement;
    const neueOption = document.createElement("option");
    neueOption.value = lowercaseName;
    neueOption.textContent = lebensmittelName;
    lebensmittelAuswahl.appendChild(neueOption);

    // Hinzufügen des benutzerdefinierten Lebensmittels zur Datenbank
    lebensmittel[lowercaseName] = {
        name: lebensmittelName,
        kalorienPro100Gramm: kalorien,
        proteinePro100Gramm: proteine,
        fettPro100Gramm: fett
    };
}


document.addEventListener("DOMContentLoaded", () => {
    const lebensmittelHinzufügenBtn = document.getElementById("benutzerZutatSpeichernBtn");
    if (lebensmittelHinzufügenBtn) {
        lebensmittelHinzufügenBtn.addEventListener("click", () => {
            const benutzerZutatInput = document.getElementById("benutzerZutat") as HTMLInputElement;
            const benutzerKalorienInput = document.getElementById("benutzerKalorien") as HTMLInputElement;
            const benutzerProteineInput = document.getElementById("benutzerProteine") as HTMLInputElement;
            const benutzerFettInput = document.getElementById("benutzerFett") as HTMLInputElement;

            if (benutzerZutatInput && benutzerKalorienInput && benutzerProteineInput && benutzerFettInput) {
                const lebensmittelName: string = benutzerZutatInput.value;
                const kalorienPro100Gramm: number = parseFloat(benutzerKalorienInput.value);
                const proteinePro100Gramm: number = parseFloat(benutzerProteineInput.value);
                const fettPro100Gramm: number = parseFloat(benutzerFettInput.value);

                hinzufügenBenutzerdefiniertesLebensmittel(lebensmittelName, kalorienPro100Gramm, proteinePro100Gramm, fettPro100Gramm);

                benutzerZutatInput.value = "";
                benutzerKalorienInput.value = "";
                benutzerProteineInput.value = "";
                benutzerFettInput.value = "";

                console.log("Lebensmittel hinzugefügt:", lebensmittelName);
            } else {
                console.error("Eingabefelder für das Hinzufügen eines Lebensmittels nicht gefunden.");
            }
        });
    } else {
        console.error("Lebensmittel hinzufügen Button wurde nicht gefunden.");
    }

    const berechnenBtn = document.getElementById("berechnenBtn");
    if (berechnenBtn) {
        berechnenBtn.addEventListener("click", berechnen);
    } else {
        console.error("Button 'Werte berechnen' wurde nicht gefunden.");
    }

    const kalorienzielInput = document.getElementById("kalorienziel") as HTMLInputElement;
    if (kalorienzielInput) {
        kalorienzielInput.addEventListener("input", updateVerbleibendeKalorien);
    } else {
        console.error("Eingabefeld für Kalorienziel wurde nicht gefunden.");
    }

    const proteinezielInput = document.getElementById("proteineziel") as HTMLInputElement;
    if (proteinezielInput) {
        proteinezielInput.addEventListener("input", updateVerbleibendeProteine);
    } else {
        console.error("Eingabefeld für Proteinziel wurde nicht gefunden.");
    }

    const fettzielInput = document.getElementById("fettziel") as HTMLInputElement;
    if (fettzielInput) {
        fettzielInput.addEventListener("input", updateVerbleibendeFette);
    } else {
        console.error("Eingabefeld für Fettziel wurde nicht gefunden.");
    }
});

//Funktion zum berechnen der Werte
function berechnen(): void {
    const lebensmittelAuswahl = document.querySelector("#lebensmittel") as HTMLSelectElement;
    const anzahlInput = document.querySelector("#anzahl") as HTMLInputElement;
    const berechneteTabelleBody = document.getElementById("berechneteTabelleBody");

    if (!lebensmittelAuswahl || !anzahlInput || !berechneteTabelleBody) {
        console.error("Ein oder mehrere Elemente konnten nicht gefunden werden.");
        return;
    }

    const selectedFoodKey = lebensmittelAuswahl.value;
    const selectedFood = lebensmittel[selectedFoodKey];

    if (!selectedFood) {
        console.error("Ausgewähltes Lebensmittel nicht gefunden.");
        return;
    }

    const quantity = parseFloat(anzahlInput.value);

    //Berechnung der Werte entsprechend der Menge
    const kalorien = selectedFood.kalorienPro100Gramm * (quantity / 100);
    const proteine = selectedFood.proteinePro100Gramm * (quantity / 100);
    const fett = selectedFood.fettPro100Gramm * (quantity / 100);

    // Erstellen einer neuen Zeile für das ausgewählte Lebensmittel
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${selectedFood.name}</td>
        <td>${quantity}</td>
        <td>${kalorien.toFixed(2)}</td>
        <td>${proteine.toFixed(2)}</td>
        <td>${fett.toFixed(2)}</td>
    `;
    berechneteTabelleBody.appendChild(newRow);


    updateVerbleibendeKalorien();
    updateVerbleibendeProteine();
    updateVerbleibendeFette();
}



function updateVerbleibendeKalorien(): void {
    const kalorienzielInput = document.getElementById("kalorienziel") as HTMLInputElement;
    if (!kalorienzielInput) {
        console.error("Eingabefeld für Kalorienziel wurde nicht gefunden.");
        return;
    }

    tageszielKalorien = parseFloat(kalorienzielInput.value);

    // Berechnung der bereits verbrauchten Kalorien aus der Tabelle
    let bereitsVerbrauchteKalorienAusTabelle = 0;
    const berechneteTabelleBody = document.getElementById("berechneteTabelleBody");
    if (berechneteTabelleBody) {
        const rows = berechneteTabelleBody.querySelectorAll("tr");
        rows.forEach((row) => {
            const kalorienCell = row.querySelector("td:nth-child(3)") as HTMLTableCellElement;
            if (kalorienCell) {
                bereitsVerbrauchteKalorienAusTabelle += parseFloat(kalorienCell.innerText);
            }
        });
    }

    bereitsVerbrauchteKalorien = bereitsVerbrauchteKalorienAusTabelle;
    const verbleibendeKalorien: number = tageszielKalorien - bereitsVerbrauchteKalorien;
    const verbleibendeKalorienDiv = document.getElementById("verbleibendeKalorien");
    if (verbleibendeKalorienDiv) {
        verbleibendeKalorienDiv.innerText = `Verbleibende Kalorien: ${verbleibendeKalorien.toFixed(2)}`;
    }

    // Anzeige des täglichen Kalorienziels unter dem Eingabefeld
    let kalorienzielAnzeige = document.getElementById("kalorienzielAnzeige") as HTMLDivElement;
    if (!kalorienzielAnzeige) {
        kalorienzielAnzeige = document.createElement("div");
        kalorienzielAnzeige.id = "kalorienzielAnzeige";
        const kalorienzielDiv = document.getElementById("kalorienzielDiv");
        if (kalorienzielDiv) {
            kalorienzielDiv.appendChild(kalorienzielAnzeige);
        }
    }
    kalorienzielAnzeige.innerText = `Tägliches Kalorienziel: ${tageszielKalorien.toFixed(2)}`;
}



function updateVerbleibendeProteine(): void {
    const proteinezielInput = document.getElementById("proteineziel") as HTMLInputElement;
    if (!proteinezielInput) {
        console.error("Eingabefeld für Proteinziel wurde nicht gefunden.");
        return;
    }

    tageszielProteine = parseFloat(proteinezielInput.value);

    // Berechnet die bereits verbrauchten Proteine aus der Tabelle
    let bereitsVerbrauchteProteineAusTabelle = 0;
    const berechneteTabelleBody = document.getElementById("berechneteTabelleBody");
    if (berechneteTabelleBody) {
        const rows = berechneteTabelleBody.querySelectorAll("tr");
        rows.forEach((row) => {
            const proteineCell = row.querySelector("td:nth-child(4)") as HTMLTableCellElement;
            if (proteineCell) {
                bereitsVerbrauchteProteineAusTabelle += parseFloat(proteineCell.innerText);
            }
        });
    }

    bereitsVerbrauchteProteine = bereitsVerbrauchteProteineAusTabelle;
    const verbleibendeProteine: number = tageszielProteine - bereitsVerbrauchteProteine;
    const verbleibendeProteineDiv = document.getElementById("verbleibendeProteine");
    if (verbleibendeProteineDiv) {
        verbleibendeProteineDiv.innerText = `Verbleibende Proteine: ${verbleibendeProteine.toFixed(2)}`;
    }

    // Anzeige des täglichen Proteinziels unter dem Eingabefeld
    let proteinezielAnzeige = document.getElementById("proteinezielAnzeige") as HTMLDivElement;
    if (!proteinezielAnzeige) {
        proteinezielAnzeige = document.createElement("div");
        proteinezielAnzeige.id = "proteinezielAnzeige";
        const proteinezielDiv = document.getElementById("proteinezielDiv");
        if (proteinezielDiv) {
            proteinezielDiv.appendChild(proteinezielAnzeige);
        }
    }
    proteinezielAnzeige.innerText = `Tägliches Proteinziel: ${tageszielProteine.toFixed(2)}`;
}

function updateVerbleibendeFette(): void {
    const fettzielInput = document.getElementById("fettziel") as HTMLInputElement;
    if (!fettzielInput) {
        console.error("Eingabefeld für Fettziel wurde nicht gefunden.");
        return;
    }

    tageszielFette = parseFloat(fettzielInput.value);

    // Berechnet die bereits verbrauchten Fette aus der Tabelle
    let bereitsVerbrauchteFetteAusTabelle = 0;
    const berechneteTabelleBody = document.getElementById("berechneteTabelleBody");
    if (berechneteTabelleBody) {
        const rows = berechneteTabelleBody.querySelectorAll("tr");
        rows.forEach((row) => {
            const fettCell = row.querySelector("td:nth-child(5)") as HTMLTableCellElement;
            if (fettCell) {
                bereitsVerbrauchteFetteAusTabelle += parseFloat(fettCell.innerText);
            }
        });
    }

    bereitsVerbrauchteFette = bereitsVerbrauchteFetteAusTabelle;
    const verbleibendeFette: number = tageszielFette - bereitsVerbrauchteFette;
    const verbleibendeFetteDiv = document.getElementById("verbleibendeFette");
    if (verbleibendeFetteDiv) {
        verbleibendeFetteDiv.innerText = `Verbleibende Fette: ${verbleibendeFette.toFixed(2)}`;
    }

    // Anzeige des täglichen Fettziels unter dem Eingabefeld
    let fettzielAnzeige = document.getElementById("fettzielAnzeige") as HTMLDivElement;
    if (!fettzielAnzeige) {
        fettzielAnzeige = document.createElement("div");
        fettzielAnzeige.id = "fettzielAnzeige";
        const fettzielDiv = document.getElementById("fettzielDiv");
        if (fettzielDiv) {
            fettzielDiv.appendChild(fettzielAnzeige);
        }
    }
    fettzielAnzeige.innerText = `Tägliches Fettziel: ${tageszielFette.toFixed(2)}`;
}
