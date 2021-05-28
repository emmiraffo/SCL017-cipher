import cipher from './cipher.js';


// Función asignada al botón de cifrado, toma el offset y lo convierte en entero, y el contenido de la caja 1 para realizar la función de cifrar
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

function accionFinal1() {
   document.getElementById("mensaje").innerHTML = "Tu mensaje ya está cifrado"  
}
function accionFinal2() {
    document.getElementById("mensaje").innerHTML = "Tu mensaje ya está Descifrado"  
 }




var botonCifrado = document.getElementById("cifrado");
var botonDescifrado = document.getElementById("descifrado");



botonCifrado.addEventListener("click", inicioCifrado)
botonCifrado.addEventListener("click", accionFinal1)
botonDescifrado.addEventListener("click", inicioDescifrado)
botonDescifrado.addEventListener("click", accionFinal2)
