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
const evenOrOdd = evenChoice(userChoice);
console.log(evenOrOdd);

console.log(userChoice2);

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
const sumNumber = generatedNumber + userChoice2;
console.log(sumNumber);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function sumEvenOrOdd(sum) {
  const sumEven = sum % 2 === 0;
  return sumEven;
}
const finalResult = sumEvenOrOdd(sumNumber);
console.log(finalResult);

// Dichiariamo chi ha vinto.
function winner(sum, choice) {
  if (sum === choice) console.log("player won");
  else {
    console.log("pc won");
  }
}
const realWinner = winner(finalResult, evenOrOdd);
