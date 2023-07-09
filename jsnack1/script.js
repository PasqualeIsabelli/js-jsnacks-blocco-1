// Array nomi e cognomi
const firstnameList = ["Antonio", "Giuseppe", "Giovanni", "Ciro", "Salvatore"];
const lastnameList = ["Rossi", "Verdi", "Bianchi", "Draghi", "Esposito"];

const guestList = [];

// Ciclo
for (let i = 0; i < 25; i++){

  // Randomizzo i nomi e cognomi
  const randomFirstname = Math.floor(Math.random() * firstnameList.length); 
  const randomLastname = Math.floor(Math.random() * lastnameList.length);

  // Sommo nome e cognome
  // const fullName = firstnameList[randomFirstname] + " " + lastnameList[randomLastname];
  // Anzichè concancatenare i nomi con il +; sommo nome e cognome all'interno di un array
  const fullName = [firstnameList[randomFirstname], lastnameList[randomLastname]];

  // Se il nome creato esiste già, faccio ripetere lo stesso ciclo per evitare di creare omonimi.
  if (guestList.indexOf(fullName.join(" ")) >= 0) {
    i--; // il decremento serve per far ripetere tante volte il ciclo finchè non verranno generati 25 invitati non omonimi
  } else {
    guestList.push(fullName.join(" "));
  }
}

console.log (guestList);