let notas: number[] = [
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
  Math.floor(Math.random() * 100),
];
let media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
console.log("Notas:", notas);
console.log("Média das notas:", media);
