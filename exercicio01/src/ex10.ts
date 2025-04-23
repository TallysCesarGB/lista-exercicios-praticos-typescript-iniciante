let largura: number = Math.floor(Math.random() * 10);
let altura: number = Math.floor(Math.random() * 10);
console.log(`Largura: ${largura}`);
console.log(`Altura: ${altura}`);

function calcularAreaRetangulo(largura: number, altura: number): number {
  return largura * altura;
}
console.log("Área do retângulo:", calcularAreaRetangulo(largura, altura));
