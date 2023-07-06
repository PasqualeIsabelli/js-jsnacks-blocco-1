// Array nomi e cognomi
const firstnameList = ["Antonio", "Giuseppe", "Giovanni", "Ciro", "Salvatore"];
const lastnameList = ["Rossi", "Verdi", "Bianchi", "Draghi", "Esposito"];

// Ciclo
for (let i = 0; i < 25; i++){

  // Randomizzo i nomi e cognomi
  const randomFirstname = Math.floor(Math.random() * 5);
  const randomLastname = Math.floor(Math.random() * 5);

  const firstName = firstnameList[randomFirstname];
  const lastName = lastnameList[randomLastname];

  // Sommo nome e cognome
  const fullName = `${firstName} ${lastName}`;

  console.log (fullName);
}