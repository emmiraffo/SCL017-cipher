import cipher from './cipher.js';


// Función asignada al botón de cifrado, tom el offset y lo convierte en entero, y el contenido de la caja 1 para realizar la función de cifrar
function inicioCifrado() {
    var texto = document.getElementById("cajaT1").value;
    texto= texto.toUpperCase()
    var offset = document.getElementById("offset").value;
    offset = Number(offset)
    var textoCifrado = cipher.encode(offset,texto) 
    document.getElementById("cajaT2").innerHTML= textoCifrado;
 }

 // Función asignada al botón de descifrado, tom el offset y lo convierte en entero, y el contenido de la caja 1 para realizar la función de descifrar
function inicioDescifrado() {
    var texto = document.getElementById("cajaT1").value;
    texto= texto.toUpperCase()
    var offset = document.getElementById("offset").value;
    offset = Number(offset)
    var textoDecifrado = cipher.decode(offset,texto) 
    document.getElementById("cajaT2").innerHTML= textoDecifrado;
}


var botonCifrado = document.getElementById("cifrado");
var botonDescifrado = document.getElementById("descifrado");



botonCifrado.addEventListener("click", inicioCifrado)
botonDescifrado.addEventListener("click", inicioDescifrado)