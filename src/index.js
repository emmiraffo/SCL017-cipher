import cipher from './cipher.js';

//console.log(cipher);


// Funcion  para pasar de una caja a otra por el evento onclick


function inicioCifrado() {
    var texto = document.getElementById("cajaT1").value;
    texto= texto.toUpperCase()
    var offset = document.getElementById("offset").value;
    offset = Number(offset)
    var textoCifrado = cipher.encode(offset,texto) 
    document.getElementById("cajaT2").innerHTML= textoCifrado;
 }
 
function inicioDecifrado() {
    var texto = document.getElementById("cajaT1").value;
    texto= texto.toUpperCase()
    var offset = document.getElementById("offset").value;
    offset = Number(offset)
    var textoDecifrado = cipher.decode(offset,texto) 
    document.getElementById("cajaT2").innerHTML= textoDecifrado;

}
window.inicioCifrado = inicioCifrado
window.inicioDecifrado = inicioDecifrado