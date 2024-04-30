// 7. Escribe un programa que tome un string como entrada y cuente el número de vocales que contiene.
// Julian Leon

function contarVocales( cadena ) {
    let contadorVocales = 0;
    let vocales = 'aeiou';

    for( let i = 0; i < cadena.length; i++ ) {
        let esVocal = false;

        for( let j = 0; j < vocales.length; j++ ) {
            if( cadena[ i ] === vocales[ j ] ) {
                esVocal = true;
                break;
            }
        }

        if( esVocal ) {
            contadorVocales++;
        }
    }

    return contadorVocales;
}

let cadena = prompt( 'Coloca una palabra' );
let cantidadVocales = contarVocales( cadena );

console.log( 'La cantidad de vocales es ' + cantidadVocales );


// vocales 'aeiou'
// candena 'hola mundo!'