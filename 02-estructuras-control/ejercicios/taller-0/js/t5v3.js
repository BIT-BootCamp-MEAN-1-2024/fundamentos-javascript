// 5. Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.
// Version de Julian Leon

function sumar( numero1, numero2 ) {
    return numero1 + numero2;
}
function restar( numero1, numero2 ) {
    return numero1 - numero2;
}
function multiplicar( numero1, numero2 ) {
    return numero1 * numero2;
}
function dividir( numero1, numero2 ) {
    if( numero2 == 0 ) {
        return 'Division por cero';
    }
    else {
        return numero1 / numero2;
    }
}



let numero1 = parseInt( prompt( 'Ingrese el primer valor' ) );
let numero2 = parseInt( prompt( 'Ingrese el segundo valor' ) );
let operacion = prompt( 'Que operacion quiere hacer?' );
let resultado;

switch( operacion ) {
    case '+':
        resultado = sumar( numero1, numero2 );
        break;
    case '-':
        resultado = restar( numero1, numero2 );
        break;
    case '*':
        resultado = multiplicar( numero1, numero2 );
        break;
    case '/':
        // 5 == 5       true
        // 5 == '5'     true
        // 5 === 5      true
        // 5 === '5'    false

        resultado = dividir( numero1, numero2 );
        break;
    default:
        resultado = 'Operacion invalida';
}

console.log( 'El resultado de la operacion es ' + resultado );