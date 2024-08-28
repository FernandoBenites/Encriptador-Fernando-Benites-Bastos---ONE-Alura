const textArea = document.querySelector ('.texto');
const mensagem = document.querySelector ('.mensagem');

let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

function btnEncriptar () {
    const textoEncriptado = encriptar (textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";

}

function btnDesencriptar () {
    const textoDesencriptado = Desencriptar (textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";

}

function btnCopiar (){
    const textoCopiado = mensagem.value;
    textArea.value = textoCopiado
    mensagem.value = "";
    alert("O texto foi copiado");
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase ();

    for (let i=0; i<matrizCodigo.length; i++) {
        if (stringEncriptada.includes (matrizCodigo [i] [0])) {
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo [i] [0], matrizCodigo [i] [1]); 
        }
    }
    return stringEncriptada;
}

function Desencriptar (stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase ();

    for (let i=0; i<matrizCodigo.length; i++) {
        if (stringDesencriptada.includes (matrizCodigo [i] [1])) {
            stringDesencriptada = stringDesencriptada.replaceAll (matrizCodigo [i] [1], matrizCodigo [i] [0]); 
        }
    }
    return stringDesencriptada;
}