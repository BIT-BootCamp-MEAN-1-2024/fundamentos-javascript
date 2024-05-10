/** Crear una lista de numeros aleatorios y determinar cuantos son pares, cuantos son impares y cuantos son el numero cero */

/** Genera # aleatorio entre 0 y 10 */
function generarEnteroAleatorio() {
    const decimal = Math.random() * 10;
    // console.log( decimal );
    
    const entero = decimal.toFixed( 0 );    // const entero = parseInt( decimal );

    return parseInt( entero );
}

/** Genera la cantidad de #s aleatorios que ingresa el usuario y los inserta dentro de una lista */
function insertarNumeros() {
    const numbers = [];

    let cantidad = prompt( 'Digita cantidad de #s a insertar' );
    cantidad = parseInt( cantidad );

    for( let i = 0; i < cantidad; i++ ) {
        // Generar numeros aleatorios
        numbers.push( generarEnteroAleatorio() );
    }

    return numbers;
}

// numeros[ i ] != 0 && numeros[ i ] % 2 == 0 (contar pares)
// numeros[ i ] != 0 && numeros[ i ] % 2 != 0 (contar impares)
// numbers[ i ] == 0                          (contar ceros)

/** Valida si un # es par y es diferente de CERO (funcion que se pasara como parametro a otra funcion) */
function pares( numero ) {
    return numero != 0 && numero % 2 == 0;
}
/** Valida si un # es impar y es diferente de CERO (funcion que se pasara como parametro a otra funcion) */
function impares( numero ) {
    return numero != 0 && numero % 2 != 0;
}
/** Valida si un # es igual CERO (funcion que se pasara como parametro a otra funcion) */
function ceros ( numero ) {
    return numero == 0;
}

/** Cuenta los numeros pares, impares o ceros de una lista, dependiendo de la funcion que se le pase como parametro */
function contar( numbers, cb ) {
    let contador = 0;

    for( let i = 0; i < numbers.length; i = i + 1 ) {
        // Invocando el callback pasado a la funcion valida si el # es par, impar o cero
        if( cb( numbers[ i ] ) ) {
            contador = contador + 1;    // Cuenta si un # es par, impar o cero de acuerdo al callback que se paso al if
        }
    }

    return contador;
}

/** Funcion inicializadora */
function init() {
    // 1. Numeros insertados
    const listaNumeros = insertarNumeros();
    console.log( listaNumeros );

    // 2. Contar los numeros pares
    const cantidadPares = contar( listaNumeros, pares );

    // 3. Contar los numeros impares
    const cantidadImpares = contar( listaNumeros, impares );
    
    // 4. Contar los numero cero
    const cantidadCeros = contar( listaNumeros, ceros );

    
    // 5. Mostrar los resultados
    console.log( `Cant. Pares ${ cantidadPares }` );
    console.log( `Cant. Impares ${ cantidadImpares }` );
    console.log( `Cant. Ceros ${ cantidadCeros }` );
}

init();     // Invocacion a la funcion inicializadora


