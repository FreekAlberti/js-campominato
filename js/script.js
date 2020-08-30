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
  var verifica = checkNum(listaNumBomba, numero);
  if (verifica == true) {
    listaNumBomba.push(numero);
  }
}
console.log(listaNumBomba);

//creo variabile array che contiene i numeri utente
//variabili booleana haPerso = false
//ciclo di 100-16 volte  //for(i=0; i<tentativi-bombe; i++)
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


/*
var numUtente =[];
var haPerso = false;
for (var i = 0; i < (100 - 16); i++) {
  var numeroDichiaratoUtente = prompt("scrivi un numero tra 1 e 100");
  var ok = num1Cento(numeroDichiaratoUtente);
  var verifica = checkNum(numUtente, numeroDichiaratoUtente);
  if (verifica == true) {
    numUtente.push(numeroDichiaratoUtente);
  }
  var check = checkNum(listaNumBomba, numeroDichiaratoUtente);
  if (check == false) {
    alert("Hai perso");
  }
  console.log(numUtente);
}
*/
//FUNZIONI

//VERIFICA NUMERO COMPRESO 1-100

function num1Cento (num){
  var ok = true;
  if (num < 1) {
    ok = false;
  } else if (num > 100){
    ok = false;
  }
  return ok;
}

//VERIFICA NUMERO PRESENTE IN ARRAY

function checkNum(lista, num){
  for (var i = 16; i >= lista.length; i--) {
    var check = true;
    if (lista.indexOf(num) != -1) {
      check = false;
    }
  }
  return check;
}

// GENERA NUMERO CASUALE TRA 1-100

function numeriCasuali(){
  return Math.floor(Math.random() * (100 - 1) + 1);
}
