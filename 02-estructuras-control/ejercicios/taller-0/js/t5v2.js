// 5. Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.
// Version de Cesar Martinez

let option = 'n';
let error;

//  1
// ---
//  0

do {

    let numero1 = parseInt( prompt( 'Ingrese el primer valor' ) );
    let numero2 = parseInt( prompt( 'Ingrese el segundo valor' ) );
    let operacion = prompt( 'Que operacion quiere hacer?' );
    let resultado;

    switch( operacion ) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            // 5 == 5       true
            // 5 == '5'     true
            // 5 === 5      true
            // 5 === '5'    false

            if( numero2 == 0 ) {
                error = 'ERROR: No se puede dividir por cero'; 
                break;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert( 'Opcion invalida' );
    }

    // console.log( 'error: ' + error );
    if( error ) {
        alert( error );
    }
    else {
        alert( 'El resultado de ' + numero1 + ' ' + operacion + ' ' + numero2 + ' ' + ' = ' + resultado );
    }
    
    option = prompt( 'Desea continuar S/N:' );

} while( option.toLowerCase() == 's' );

