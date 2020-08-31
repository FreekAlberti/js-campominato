/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

// BONUS

var controllo = false;
while (controllo == false) {
  var dif = parseInt(prompt("difficoltá 0, 1 o 2?"));
  if (dif < 0 || dif > 2) {
    alert("inserisci una difficoltá accettabile");
  } else {
    controllo = true;
  }
}
var range;
switch (dif) {
  case 0:
    range = 100;
    break;
  case 1:
    range = 80;
    break;
  case 2:
    range = 50;
    break;
}

//funzione che genera un numero casuale tra 1 e 100
//funzione che dato un array e un numero mi controlla che il numero non sia già nell'array
//creo variabile array che contiene i numeri bomba
//ciclo che chiama la mia funzione di generazione dei numeri 16 volte  while(i<bombe)
//check che il numero non sia duplicato
//se non è duplicato, lo salvo nell'array bombe

var bombe = 16;
var listaNumBomba = [];
while (listaNumBomba.length < bombe) {
  var numero = numeriCasuali();
  console.log(numero);
  var verifica = checkNum(listaNumBomba, numero);
  console.log(verifica);
  if (verifica == false) {
    listaNumBomba.push(numero);
  }
}
console.log(listaNumBomba);

//creo variabile array che contiene i numeri utente
//ciclo di 84 volte
  //prompt in cui chiedo all'utente un numero
  //check che il numero sia compreso tra 1 e 100
  //check che il numero non sia duplicato nell'array utente
  //se non è duplicato, salvo il numero nell'array utente
  //check che il numero non sia nell'array bomba
  //se il numero è nell'array bomba -> alert hai perso
      //alert con array utente .length -> numero di volte che l'utente ha inserito un numero corretto
      //haPerso = true;
      //esco dal ciclo
//controllo se haPerso è false
  //alert hai vinto
  //alert con array utente .length -> numero di volte che l'utente ha inserito un numero

var numeroEsploso = true;
var numUtente =[];
while (numUtente.length < (range - 16) && numeroEsploso == true) {
  var numeroDichiaratoUtente = parseInt(prompt("scrivi un numero tra 1 e 100"));
  var ok = num1Cento(numeroDichiaratoUtente);
  var verifica = checkNum(numUtente, numeroDichiaratoUtente);
  var check = checkNum(listaNumBomba, numeroDichiaratoUtente);
  if (check == true) {
    alert("Hai perso\nSei arrivato fino al livello " + numUtente.length);
    numeroEsploso = false;
  }
  if (isNaN(numeroDichiaratoUtente) || numeroDichiaratoUtente < 1 || numeroDichiaratoUtente > 100) {
    alert("Sei pregato di inserire un valore congruo alla richiesta");
  } else if (verifica == false && check == false) {
    numUtente.push(numeroDichiaratoUtente);
  }
  console.log(numUtente);
}
if (numUtente.length == range - 17) {
  alert("Daje Bro hai vinto inserendo " + (numUtente.length + 1) + " numeri");
}

//FUNZIONI

//VERIFICA NUMERO COMPRESO 1-100

function num1Cento (num){
  var ok = true;
  if (num < 1) {
    ok = false;
  } else if (num > range){
    ok = false;
  }
  return ok;
}

//VERIFICA NUMERO PRESENTE IN ARRAY

function checkNum(lista, num){
  var i = 0;
  var check = false;
  while (i < lista.length && check == false){
    if (lista[i] == num) {
      check = true;
    }
    i++;
  }
  return check;
}

// GENERA NUMERO CASUALE TRA 1-100

function numeriCasuali(){
  return Math.floor(Math.random() * (range - 1) + 1);
}
