// Array numeri
const numberList = [];
let sum = 0;

// Ciclo
for (i = 0; i < 25; i++) {
  // Creo numeri interi random tra 1 e 50
  const num = Math.floor(Math.random() * 50) +1;
  
  // Prendo i numeri nella posizione dispari
  if (i % 2 != 0){
    // Sommo i numeri con indice dispari tra loro
    sum += num;
  }

  numberList.push(num);
}

// Stampo la lista di numeri e la somma
console.log(numberList);
console.log(sum);