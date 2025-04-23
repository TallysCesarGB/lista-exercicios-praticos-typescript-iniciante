let numero: number = 1;
let soma: number = 0;

while (numero <= 20) {
  if (numero % 2 === 0) {
    // console.log(`${numero} + ${soma}`);
    soma += numero;
  }
  numero++;
}
console.log(`A soma dos números pares de 1 a 20 é: ${soma}`);
