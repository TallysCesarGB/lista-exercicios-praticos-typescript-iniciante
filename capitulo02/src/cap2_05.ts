let idadeEleitor: number = Math.floor(Math.random() * 100);
console.log(`Idade do eleitor: ${idadeEleitor}`);

if (idadeEleitor < 16) {
  console.log("Não pode votar");
} else if ((idadeEleitor >= 16 && idadeEleitor < 18) || idadeEleitor > 70) {
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório");
}
