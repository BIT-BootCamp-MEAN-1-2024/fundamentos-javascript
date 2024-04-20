/** Operador Ternario 
    Conocido como un operador condicional abreviado. Importante no abusar su uso puede reducir la legibilidad del código
    
    Sintáxis:

    ( condicion ) ? 'Si se cumple la condición' : 'Si NO cumple la condición';
*/

/** Forma tradicional: Es la abreviación explicita de un if-else */
const age = 18;

( age > 18 ) ? console.log( 'Eres mayor de edad' ) : console.log( 'Eres menor de edad' );

/** Forma abreviada a la anterior */
console.log( ( age > 18 ) ? 'Eres mayor de edad' : 'Eres menor de edad' );

/** Forma con asignación */
const message = ( age > 18 ) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log( message );

/** Forma con multiples condicionales */
const hora = 14;

const saludo = ( hora < 12 ) 
                    ? 'Buenos días' 
                    : ( hora < 18 ) 
                        ? 'Buenas tardes' 
                        : 'Buenas noches';

console.log( saludo );

