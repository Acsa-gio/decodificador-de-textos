const entradaDeTexto = document.querySelector(".entrada__de__texto");
const saidaDeTexto = document.querySelector(".saida__de__texto");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function bttEcripitar() {
    let textoEncripitado = encripitar(entradaDeTexto.value);
    saidaDeTexto.value = textoEncripitado;
    entradaDeTexto.value = "";
}

function encripitar (stringEncripitada) {
    let matrizCodigo = [ ["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"] ];
    stringEncripitada = stringEncripitada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncripitada.includes(matrizCodigo[i][0])) {
            stringEncripitada = stringEncripitada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncripitada;
}

function bttDesencripitar() {
    let textoDesencripitado = desencripitar(entradaDeTexto.value);
    saidaDeTexto.value = textoDesencripitado;
    entradaDeTexto.value = "";
}

function desencripitar (stringDesencripitada) {
    let matrizCodigo = [ ["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"] ];
    stringDesencripitada = stringDesencripitada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencripitada.includes(matrizCodigo[i][1])) {
            stringDesencripitada = stringDesencripitada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencripitada;
}

function copiar() {
    let copyText = document.querySelector("#saidaDeTexto");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#bttCopiar").addEventListener("click", copiar);
