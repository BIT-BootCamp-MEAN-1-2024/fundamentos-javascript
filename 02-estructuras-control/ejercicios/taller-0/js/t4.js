// 4. Escribe un programa que calcule el factorial de un número.
// Version de Carlos Triana

let n = parseInt( prompt( 'Ingrese un numero' ) );

console.log( 'El factorial de n ' + n );

function factorial() {
    let _factorial = n;

    while( --n ) {
        _factorial *= n;        // _factorial = _factorial * n;
    }

    console.log( 'es ' + _factorial );
}

factorial();