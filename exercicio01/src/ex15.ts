interface Aluno {
  nome: string;
  matricula: number;
  ativo: boolean;
}

let alunos: Aluno[] = [
  { nome: "Armariodonilson", matricula: 11, ativo: true },
  { nome: "Valenildo", matricula: 12, ativo: false },
  { nome: "Cleitonelson", matricula: 13, ativo: true },
];

for (let aluno of alunos) {
  if (aluno.ativo) {
    console.log("Aluno ativo:", aluno.nome);
  }
}
