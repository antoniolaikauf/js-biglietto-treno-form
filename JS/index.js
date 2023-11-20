// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.

// prendere valori  utente e metterli dentro variabili 
let nomeUtente = document.querySelector("#nome");
let chilometriUtente = document.querySelector("#chilometri");
let ageUtente = document.querySelector("#età");

// inizio evento click sulla generazione del biglietto
const generazione = document.querySelector("#genera-biglietto")
generazione.addEventListener("click", function() {
    let chilometriPercorrere = parseInt(chilometriUtente.value);
    let age=(ageUtente.value);
    console.log(chilometriPercorrere, age);
    let prezzo= chilometriPercorrere * 0.21;
    // console.log(prezzo);
    // calcolare prezzo in base età e km percorsi
    let sconto;
    if (age === "minorenne") {
        sconto = ((prezzo / 100) * 20)
    } else if (age === "over65") {
        sconto = ((prezzo / 100) * 40)
    } else {
        sconto=0;
    }
    prezzo = prezzo - sconto;
    // console.log(prezzo, sconto);
    // numero carrozza fatto randomico
    let carrozza= Math.floor((Math.random() * 100))
    // numero codice cp fatto randomico
    let numerocp=Math.floor((Math.random() * 10000))
    // elementi aggiutni dentro html al funzionamento dell'evento
    // prezzo biglietto
    document.getElementById("costo-biglietto").innerHTML=prezzo.toFixed(2); 
    // nome utente
    document.getElementById("nome-passeggero").innerHTML=nomeUtente.value;
    // fascia età
    document.getElementById("fascia-età").innerHTML=age;
    // numero carozza
    document.getElementById("n-carrozza").innerHTML=carrozza;
    // numerocp
    document.getElementById("codicecp").innerHTML=numerocp;
    // aggiunta delle caratteristiche del biglietto
    document.getElementById("risultato").style.display="block";
})

// evento per annullare il biglietto
const cancellazione=document.querySelector("#annulla-biglietto");
cancellazione.addEventListener("click", function () {
    // aggiunta delle caratteristiche del biglietto
    document.getElementById("risultato").style.display="none";
})