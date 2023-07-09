// Array
const firstList = [];
const secondList = [];

for (i = 0; i < 25; i++) {
  // Genero il primo array con 25 numeri random
  firstList.push(Math.floor(Math.random() * 50));
}

for (i = 0; i < 18; i++) {
  // Genero il secondo array con 18 numeri random
  secondList.push(Math.floor(Math.random() * 50));
}

// Effettuo la sottrazione per determinare quale dei due array contiene più elementi
const sottr = firstList.length - secondList.length;

console.log(firstList);
console.log(secondList);
console.log(sottr);

// Ciclo
for (i = 0; i < Math.abs(sottr); i++) {
  // Condizione se il primo array ha meno elementi del secondo (quindi se il primo array è minore del secondo)
  if(firstList.length < secondList.length) {
    firstList.push(30); // Pusha nel primo array
  } else {
    secondList.push(30); // altrimenti pusha nel secondo
  }
}

console.log(firstList);
console.log(secondList);