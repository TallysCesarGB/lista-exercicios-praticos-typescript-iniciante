"use strict";
let num = Math.floor(Math.random() * 100);
function ehPar(numero) {
    return numero % 2 === 0;
}
console.log(`${num} eh par?`, ehPar(num));
