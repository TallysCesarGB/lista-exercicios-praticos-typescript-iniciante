"use strict";
let largura = Math.floor(Math.random() * 10);
let altura = Math.floor(Math.random() * 10);
console.log(`Largura: ${largura}`);
console.log(`Altura: ${altura}`);
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}
console.log("Área do retângulo:", calcularAreaRetangulo(largura, altura));
