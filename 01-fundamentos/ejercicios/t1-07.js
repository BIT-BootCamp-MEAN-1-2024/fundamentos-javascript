// 7. Utilizar los operadores lógicos para verificar si un número ingresado por el usuario es mayor que 10 y menor que 20, y mostrar el resultado con alert.

const number = parseInt( prompt( 'Digite un numero' ) );

if( number > 10 && number < 20 ) {
    alert( `El numero ${ number } es mayor a 10 y menor a 20` );
}