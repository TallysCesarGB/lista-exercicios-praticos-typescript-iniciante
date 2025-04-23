"use strict";
function filtrarProdutosDisponiveis(produtos) {
    return produtos.filter((produto) => produto.emEstoque);
}
let listaProdutos = [
    { nome: "Capacete San Marino", emEstoque: true },
    { nome: "Balaclava", emEstoque: false },
    { nome: "Oleo Mobil", emEstoque: true },
];
console.log(`Produtos disponíveis:`, filtrarProdutosDisponiveis(listaProdutos));
