// 2. Escribe un programa que genere la tabla de multiplicar de un número dado.
// Version de Jesus David

let numero1 = parseInt( prompt( 'Ingrese el número de la tabla que desea' ) );

function tablaMultiplicar( numero1 ) {
    for( let i = 1; i < 11; i++ ) {
        console.log( numero1 + ' x ' + i + ' su resultado es: ' + ( numero1 * i ) );
    }
}

tablaMultiplicar( numero1 );