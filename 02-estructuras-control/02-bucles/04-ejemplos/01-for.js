// 1. Obtener el nombre de la lista que posee menos caracteres. Use un bucle for.

// Debemos entender como obtener la longitud de un string aplicando al mismo la propiedad length (veamos el siguiente ejemplo)
const name = 'Johan';
console.log( `La longitud del nombre ${ name } es: ${ name.length }` );

// Define una lista de strings
const estudiantes = [ 'Alejandra', 'Jorge', 'Javier', 'Sol', 'Laura', 'Juan', 'Nidia', 'Cesar', 'Natalia' ];

// Debemos obtener el valor de un nombre específico de la lista
console.log( estudiantes[ 2 ] );    // Javier
console.log( estudiantes[ 5 ] );    // Juan
console.log( estudiantes[ 9 ] );    // undefined ---> El campo 9 en la lista no existe

// Para obtener la longitud de un nombre específico de la lista
console.log( estudiantes[ 0 ].length );    // 9

// Desarrollo del enunciado
let nombre = estudiantes[ 0 ];
let longitud = estudiantes[ 0 ].length;

console.log( estudiantes );

for( let i = 0; i < estudiantes.length; i++ ) {
    // console.log( longitud + ' > ' + estudiantes[ i ].length );
    if( longitud > estudiantes[ i ].length ) {
        nombre = estudiantes[ i ];
        longitud = estudiantes[ i ].length;
    }
}

console.log( `La cadena mas corta de la lista es ${ nombre } con ${ nombre.length } caracteres` );