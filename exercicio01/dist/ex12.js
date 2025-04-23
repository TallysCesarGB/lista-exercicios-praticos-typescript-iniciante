"use strict";
function identificarTipo(valor) {
    if (typeof valor === "string") {
        console.log(`Você passou uma string: ${valor}`);
    }
    else {
        console.log(`Você passou um número: ${valor}`);
    }
}
identificarTipo("Oi");
identificarTipo(90);
