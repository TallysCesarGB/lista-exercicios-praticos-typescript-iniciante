let num: number = Math.floor(Math.random() * 100);
function ehPar(numero: number): boolean {
  return numero % 2 === 0;
}
console.log(`${num} eh par?`, ehPar(num));
