const cipher = {
    "codificar": function (desplazamiento,palabra){
        let unionLetras ="" ;
        for (let i=0; i < palabra.length ; i++  ) {
            let codigoAsci = palabra.charCodeAt(i)
            let letraCodificada =  ((codigoAsci - 65 + desplazamiento) % 26) + 65
            unionLetras  = unionLetras + String.fromCharCode(letraCodificada) 
      }
     return unionLetras
    },
    "decodificar": function (desplazamiento,palabra){
        let unionLetras = ""
        for (let i=0 ; i < palabra.length ; i++) {
            let posicionAsci = palabra.charCodeAt(i)
            let ubicacionAlfabeto = ((posicionAsci +65 - desplazamiento) % 26) + 65
            unionLetras = unionLetras + String.fromCharCode(ubicacionAlfabeto)
            
        }
        return unionLetras
            //let letraDecodificada = ()


        }
       
    }
    

//letras.charCodeAt(0)

//String.fromCharCode(72)

export default cipher