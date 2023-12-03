/*
// chilometri
const km = prompt('Quanti chilometri vuoi percorrere?');
console.log('km', km, typeof km);

const kmInNumero = parseInt(km);
console.log('kmInNumero', kmInNumero, typeof kmInNumero)

// età
const eta = prompt('Quanti anni hai?');
console.log('eta', eta, typeof eta);

const etaInNumero = parseInt(eta);
console.log('etaInNumero', etaInNumero, typeof etaInNumero)


// prezzo del biglietto
let prezzo = km * 0.21;

if (!isNaN(kmInNumero)) {
    if (km >=1) {
    }
}
else {
    alert('Inserisci un numero');
}


if (!isNaN(etaInNumero)) {
    // sconto
    if (eta < 18) {
        // 20% per i minorenni
        prezzo -= prezzo * 0.2;
    } else if (eta > 65) {
        // 40% per gli over 65
        prezzo -= prezzo * 0.4;
    }
}
else {
    alert('Inserisci un numero');
}


if ((km >= 1 && eta >= 1)) {
	alert('Il prezzo del tuo biglietto è: ' + prezzo.toFixed(2) + ' €');
}
else {
	alert('Errore');
}

*/


// Chiedi all'utente il numero di chilometri che vuole percorrere
const km = prompt('Quanti chilometri vuoi percorrere?');
console.log('km', km, typeof km);

const kmInNumero = parseInt(km);
console.log('kmInNumero', kmInNumero, typeof kmInNumero)


// Chiedi all'utente la sua età
const eta = prompt('Quanti anni hai?');
console.log('eta', eta, typeof eta);

const etaInNumero = parseInt(eta);
console.log('etaInNumero', etaInNumero, typeof etaInNumero)


// Calcola il prezzo del biglietto
let prezzo = km * 0.21;



// Applica lo sconto se necessario
if (eta < 18) {
    // Sconto del 20% per i minorenni
    prezzo -= prezzo * 0.2;
} else if (eta > 65) {
    // Sconto del 40% per gli over 65
    prezzo -= prezzo * 0.4;
}

if (isNaN(etaInNumero) || isNaN(kmInNumero)) {

    alert('Errore');
}
else {
	alert('Il prezzo del tuo biglietto è: ' + prezzo.toFixed(2) + ' €');
}





