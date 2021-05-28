const cipher = {
    encode: function (desplazamiento,palabra){
        if ( typeof desplazamiento !== "number" || typeof palabra !== "string" ){
            throw new TypeError('Error')
        }
        let unionLetras ="" ;
        for (let i=0; i < palabra.length ; i++  ) {
            let codigoAsci = palabra.charCodeAt(i)
            let letraCodificada =  ((codigoAsci - 65 + desplazamiento) % 26) + 65
            if (codigoAsci === 32) {
                letraCodificada = 60
            }
            if (codigoAsci === 209) {
                letraCodificada = 35
            }
            unionLetras  = unionLetras + String.fromCharCode(letraCodificada) 
      }
     return unionLetras
    },
    decode: function (desplazamiento,palabra){
        if ( typeof desplazamiento !== "number" || typeof palabra !== "string" ){
            throw new TypeError('Error')
        }
        let unionLetras = ""
        for (let i=0 ; i < palabra.length ; i++) {
            let posicionAsci = palabra.charCodeAt(i)
            let ubicacionAlfabeto = ((posicionAsci +65 - desplazamiento) % 26) + 65
            if (posicionAsci === 60) {
                ubicacionAlfabeto = 32
            }
            if (posicionAsci === 35) {
                ubicacionAlfabeto = 209
            }
            unionLetras = unionLetras + String.fromCharCode(ubicacionAlfabeto)
            
        }
        return unionLetras
            //let letraDecodificada = ()

        }   
    }
//letras.charCodeAt(0)
//String.fromCharCode(72)

export default cipher