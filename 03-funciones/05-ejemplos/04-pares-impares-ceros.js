
function generarEnteroAleatorio() {
    const decimal = Math.random() * 10;
    // console.log( decimal );
    
    const entero = decimal.toFixed( 0 );    // const entero = parseInt( decimal );

    return parseInt( entero );
}

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

function contarPares( numeros ) {
    let contador = 0;

    for( let i = 0; i < numeros.length; i = i + 1 ) {
        if( numeros[ i ] != 0 && numeros[ i ] % 2 == 0 ) {
            contador = contador + 1;
        }
    }

    return contador;
}

function contarImpares( numeros ) {
    let contador = 0;
    
    for( let i = 0; i < numeros.length; i = i + 1 ) {
        if( numeros[ i ] != 0 && numeros[ i ] % 2 != 0 ) {
            contador = contador + 1;
        }
    }

    return contador;
}

function contarCeros( numbers ) {
    let contador = 0;

    for( let i = 0; i < numbers.length; i = i + 1 ) {
        if( numbers[ i ] == 0 ) {
            contador = contador + 1;
        }
    }

    return contador;
}

function init() {
    // 1. Numeros insertados
    const listaNumeros = insertarNumeros();
    console.log( listaNumeros );

    // 2. Contar los numeros pares
    const cantidadPares = contarPares( listaNumeros );  

    // 3. Contar los numeros impares
    const cantidadImpares = contarImpares( listaNumeros );
    
    // 4. Contar los numero cero
    const cantidadCeros = contarCeros( listaNumeros );
    
    // 5. Mostrar los resultados
    console.log( `Cant. Pares ${ cantidadPares }` );
    console.log( `Cant. Impares ${ cantidadImpares }` );
    console.log( `Cant. Ceros ${ cantidadCeros }` );
}

init();

