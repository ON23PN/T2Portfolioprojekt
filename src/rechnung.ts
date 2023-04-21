import {RechnungsEintrag} from './types';
import { inputBeschreibung, inputBetrag } from './utils/dom-utils';

const rechnung: Array<RechnungsEintrag> = [];

  function getGesamtbetrag(): number{
    const gesamt = rechnung.reduce((accumulated, current)=> accumulated + current.betrag, 0);
    return gesamt
  }

  function addEintrag(){
    const beschreibung = inputBeschreibung.value;
    const betrag = Number(inputBetrag.value);

    if(beschreibung && betrag){
        rechnung.push({
            beschreibung,
            betrag,
            id: `${Math.floor(Math.random()* 999)}-rn-${Math.floor(Math.random()* 999)}`
        });
    } else {
        alert('Bitte alle Felder füllen!')
    }
  }

  export {rechnung, getGesamtbetrag, addEintrag}