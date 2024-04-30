// 1. Escribe un programa que tome dos números como variables y muestre cuál es el mayor de los dos.
// Version de Juan Diego

let numero1 = prompt( 'Ingresar el primer numero:' );
let numero2 = prompt( 'Ingresar el segundo numero:' );

if( numero1 > numero2 ) {
    console.log( 'El primer numero es mayor que el segundo' );
    alert( 'El primer numero es mayor que el segundo' );
}
else if( numero2 > numero1 ) {
    console.log( 'El segundo numero es mayor que el primero' );
    alert( 'El segundo numero es mayor que el primero' );
}
else {
    console.log( 'Los dos numeros son iguales' );
    alert( 'Los dos numeros son iguales' );
}