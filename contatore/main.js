// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt("scegli pari o dispari");
let userChoice2 = prompt("scegli un numero da 1 a 5");
console.log(userChoice);
console.log(userChoice2);
const evenOrOdd = evenChoice(userChoice);
console.log(evenOrOdd);
const generatedNumber = myNumber(1, 10);
console.log(generatedNumber);

function evenChoice(choice = "pari") {
  const userEven = choice == "pari";
  return userEven;
}
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function myNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
