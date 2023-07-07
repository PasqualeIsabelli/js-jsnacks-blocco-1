// Array nomi e cognomi
const firstnameList = ["Antonio", "Giuseppe", "Giovanni", "Ciro", "Salvatore"];
const lastnameList = ["Rossi", "Verdi", "Bianchi", "Draghi", "Esposito"];

const guestList = [];

// Ciclo
for (let i = 0; i < 25; i++){

  // Randomizzo i nomi e cognomi
  const randomFirstname = Math.floor(Math.random() * lastnameList.length); 
  const randomLastname = Math.floor(Math.random() * firstnameList.length);

  // Sommo nome e cognome
  const fullName = [firstnameList[randomFirstname], lastnameList[randomLastname]];

  guestList.push(fullName.join(" "));
}

console.log (guestList);