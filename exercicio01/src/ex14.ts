type Pessoa = {
  nome: string;
  idade: number;
  profissao: string;
};

function descreverPessoa(pessoa: Pessoa): string {
  return `${pessoa.nome} tem ${pessoa.idade} anos e trabalha como ${pessoa.profissao}.`;
}

console.log(
  descreverPessoa({
    nome: "Tatazinho",
    idade: 29,
    profissao: "Assistente de Desenvolvimento",
  })
);
