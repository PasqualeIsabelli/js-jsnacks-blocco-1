const firstList = [];
const secondList = [];

for (i = 0; i < 25; i++) {

  firstList.push(Math.floor(Math.random() * 50));
}

for (i = 0; i < 18; i++) {

  secondList.push(Math.floor(Math.random() * 50));
}

const sottr = firstList.length - secondList.length;

console.log(firstList);
console.log(secondList);
console.log(sottr);

for (i = 0; i < Math.abs(sottr); i++) {
  if(firstList.length < secondList.length) {
    firstList.push(30);
  } else {
    secondList.push(30);
  }
}

console.log(firstList);
console.log(secondList);