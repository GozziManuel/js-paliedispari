// Palidroma
// Chiedere all’utente di inserire una parola
const userWord = prompt("inserire una parola qualsiasi");
console.log(userWord);
console.log(palindromWord(userWord));

function palindromWord(word) {
  let reversedWord = word.split("").reverse().join("");
  if (reversedWord === word) {
    alert("la parola è palindroma");
  } else {
    alert("la parola non è palindroma");
  }
  return reversedWord;
}
// Creare una funzione per capire se la parola inserita è palindroma
