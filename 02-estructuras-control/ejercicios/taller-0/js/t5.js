// 5. Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.
// Version de Juan Felipe

let numero1 = parseInt( prompt( 'Ingrese el primer valor' ) );
let numero2 = parseInt( prompt( 'Ingrese el segundo valor' ) );
let operacion = prompt( 'Que operacion quiere hacer?' );
let resultado;

switch( operacion ) {
    case '+':
        resultado = numero1 + numero2;
        document.write( resultado );
        break;
    case '-':
        resultado = numero1 - numero2;
        document.write( resultado );
        break;
    case '*':
        resultado = numero1 * numero2;
        document.write( resultado );
        break;
    case '/':
        resultado = numero1 / numero2;
        document.write( resultado );
        break;
}