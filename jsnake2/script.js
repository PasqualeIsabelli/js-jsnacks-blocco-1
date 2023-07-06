// Array numeri
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somma = 0;

// Ciclo
for (i = 0; i < numberList.length; i++) {
  
  // Prendo i numeri nella posizione dispari
  if (i % 2 != 0){
    // Sommo i numeri tra loro
    somma += numberList[i];
  }
}

// Stampo la somma
console.log(somma);