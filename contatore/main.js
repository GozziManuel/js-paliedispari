// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt("scegli pari o dispari");
let userChoice2 = parseInt(prompt("scegli un numero da 1 a 5"));
if (userChoice !== "pari" && userChoice !== "dispari") {
  alert("stringa non valida scegli tra pari o dispari");
}
if (userChoice2 > 5 || userChoice2 < 1) {
  alert("numero non valido");
}
if (isNaN(userChoice2) == true) {
  alert("non è un numero");
}
console.log(userChoice);
console.log(userChoice2);
const evenOrOdd = evenChoice(userChoice);
console.log(evenOrOdd);
const generatedNumber = myNumber(1, 5);
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
