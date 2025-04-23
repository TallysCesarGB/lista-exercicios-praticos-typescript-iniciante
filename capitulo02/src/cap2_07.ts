let nomes: string[] = [
  "Ana",
  "Bruno",
  "Carlos",
  "Daniela",
  "Eduardo",
  "Fernanda",
  "Gabriel",
  "Helena",
  "Igor",
  "Julia",
];

let nota1: number = Math.random() * 11;
let nota2: number = Math.random() * 11;
let nota3: number = Math.random() * 11;

let frequencia: number = Math.floor(Math.random() * 101);
let aluno: string = nomes[Math.floor(Math.random() * nomes.length)];
console.log(`Nome: ${aluno}`);
console.log(`Nota 1: ${nota1.toFixed(2)}`);
console.log(`Nota 2: ${nota2.toFixed(2)}`);
console.log(`Nota 3: ${nota3.toFixed(2)}`);
console.log(`Frequência: ${frequencia}%`);
let media: number = (nota1 + nota2 + nota3) / 3;
console.log(`Média: ${media.toFixed(2)}`);

if (frequencia >= 75) {
  if (media >= 7) {
    console.log("Aprovado");
  } else if (media >= 5 && media < 7) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
} else {
  console.log("Reprovado por falta");
}
