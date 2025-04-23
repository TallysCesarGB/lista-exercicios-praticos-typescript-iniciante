"use strict";
// Lista com 20 nomes
const nomesAlunos = [
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
    "Karla",
    "Leonardo",
    "Mariana",
    "Nicolas",
    "Olívia",
    "Paulo",
    "Rafaela",
    "Samuel",
    "Tatiane",
    "Vinícius",
];
function notasRandom() {
    return [Math.random() * 10, Math.random() * 10, Math.random() * 10];
}
function verificarAprovacao(alunos) {
    for (const aluno of alunos) {
        const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
        const media = soma / aluno.notas.length;
        const situacao = media >= 7 ? "Aprovado" : "Reprovado";
        console.log(`${aluno.nome} - Média: ${media.toFixed(2)} - Situação: ${situacao}`);
    }
}
const alunos = [];
for (let i = 0; i < 5; i++) {
    // Sorteia um nome aleatório
    const nome = nomesAlunos[Math.floor(Math.random() * nomesAlunos.length)];
    const notas = notasRandom();
    alunos.push({ nome, notas });
}
verificarAprovacao(alunos);
