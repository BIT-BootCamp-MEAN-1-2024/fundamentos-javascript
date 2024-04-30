// 9. Escribe un programa que genere una lista aleatoria de numeros y elimine todos los pares.
// Version Jesus David

let aleatoria;
let listaAleatoria = [];
let listaImpares = [];

for( let i = 0; i < 10; i++ ) {
    aleatoria = Math.round( Math.random() * 10 );       // Math.round() ----  6.743534 -> 7, 6.4565 -> 6
    listaAleatoria.push( aleatoria );                   // [ 3, 5, 6, 7, 8, 3, 3, 1, 4, 9 ] ---> Siempre va a tener 10 numeros aleatorios

    // Validando si cada numero es impar
    if( listaAleatoria[ i ] % 2 != 0 ) {
        listaImpares.push( listaAleatoria[ i ] );       // [ 3, 5, 7, 3, 3, 1, 9 ] ---> Nueva lista con los numeros impares
    }
}

console.log( listaAleatoria );
console.log( listaImpares );



