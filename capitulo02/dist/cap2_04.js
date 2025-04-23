"use strict";
let saldo = Math.floor(Math.random() * 1000 - 500);
console.log(saldo);
let mensagem = saldo >= 0 ? "Saldo OK" : "Saldo negativo";
console.log(mensagem);
