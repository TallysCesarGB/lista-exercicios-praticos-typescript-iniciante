let nota: number = Math.random() * 10;
console.log(`Nota: ${nota.toFixed(2)}`);

if (nota < 5) {
  console.log("Reprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}
