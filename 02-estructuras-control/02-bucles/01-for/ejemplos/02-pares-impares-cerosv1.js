/** De una lista de #s dados determinar cuantos son: pares, impares o cero 
    Solucion dada por el grupo de: Natalia, Jesus y Julian
*/

const numeros = [ 5, 7, 0, 8, 1, 5, 3, 9, 2 ];      // Define una lista con valores enteros predeterminados

/** Define 3 listas vacias donde vamos a separar los #s de acuerdo a si son: pares, impares, impares o cero */
const pares = [];
const impares = [];
const cero = [];

/** Bucle que se repetira tantas veces la longitud de la lista */
for( let i = 0; i < numeros.length; i++ ) {
    if( numeros[ i ] != 0 ) {
        if( numeros[ i ] % 2 == 0 ) {
            pares.push( numeros[ i ] );
        }
        else {
            impares.push( numeros[ i ] );
        }
    }
    else {
        cero.push( numeros[ i ] );
    }
}

/** Imprime el resultado esperado en enunciado */
console.log( numeros );
console.log( 
    'longitud: ' + pares.length + ' lista -> ', 
    pares,
);
console.log( 
    'longitud: ' + impares.length + ' lista -> ', 
    impares,
);
console.log( 
    'longitud: ' + cero.length + ' lista -> ', 
    cero,
);