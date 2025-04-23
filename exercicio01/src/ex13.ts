type Produto = {
  nome: string;
  emEstoque: boolean;
};

function filtrarProdutosDisponiveis(produtos: Produto[]): Produto[] {
  return produtos.filter((produto) => produto.emEstoque);
}

let listaProdutos: Produto[] = [
  { nome: "Capacete San Marino", emEstoque: true },
  { nome: "Balaclava", emEstoque: false },
  { nome: "Oleo Mobil", emEstoque: true },
];

console.log(`Produtos disponíveis:`, filtrarProdutosDisponiveis(listaProdutos));
