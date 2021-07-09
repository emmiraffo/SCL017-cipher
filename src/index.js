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
   document.getElementById("mensaje").innerHTML = "Mensaje Cifrado"  
}
function accionFinal2() {
    document.getElementById("mensaje").innerHTML = "Mensaje Descifrado"  
 }

function showBox () {
    document.getElementById("boxTwo").classList.toggle("show");
    
}




var botonCifrado = document.getElementById("buttonEncode");
botonCifrado.addEventListener("click", ()=> {
    var texto = document.getElementById("cajaT1").value;
    var offset = document.getElementById("offset").value;
    if (texto == 0)
    return alert ("Introduce el Texto que deseas Cifrar");
    else if (offset == ""){
        return alert ("Introduce el Desplazamiento que deseas");
    }
    else
    inicioCifrado();
    showBox();
    accionFinal1();
    });

var botonDescifrado = document.getElementById("buttonDecode");
botonDescifrado.addEventListener("click", () => {
    var texto = document.getElementById("cajaT1").value;
    var offset = document.getElementById("offset").value;
    if (texto == 0){
        return alert ("Introduce el texto que deseas Descifrar");
    } else if (offset == ""){
            return alert ("Introduce el Desplazamiento que deseas");
    } else
        inicioDescifrado ();
        showBox();
        accionFinal2();
 } );
