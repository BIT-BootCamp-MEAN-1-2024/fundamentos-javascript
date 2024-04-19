/** OPERADORES DE COMPARACION

    | Operador | Descripción            | Ejemplo          |
    |----------|------------------------|------------------|
    | ==       | Igualdad               | a == b           |
    | !=       | Desigualdad            | a != b           |
    | ===      | Estrictamente igual    | a === b          |
    | !==      | Estrictamente desigual | a !== b          |
    | >        | Mayor que              | a > b            |
    | >=       | Mayor o igual que      | a >= b           |
    | <        | Menor que              | a < b            |
    | <=       | Menor o igual que      | a <= b           |

 */

/** Define variables con los siguientes valores */
let a = 5;
let b = '5';

/** Igualdad (==): Comprueba si dos valores son iguales, sin tener en cuenta el tipo de dato. */
console.log( a == b ); // true

/** Desigualdad (!=): Comprueba si dos valores no son iguales, sin tener en cuenta el tipo de dato. */
console.log( a != b ); // false

/** Estrictamente igual (===): Comprueba si dos valores son iguales y del mismo tipo de dato. Pregunta primero por el valor (si se cumple), en segunda instancia pregunta por el tipo de dato */
console.log( a === b ); // false

/** Estrictamente desigual (!==): Comprueba si dos valores no son iguales o no son del mismo tipo de dato. Pregunta primero por el valor (si se cumple), en segunda instancia pregunta por el tipo de dato */
console.log( a !== b ); // true


/** Asigna nuevos valores a las variables definidas */
a = 10;
b = 5;

/** Mayor que (>): Comprueba si el primer valor es mayor que el segundo. */
console.log( a > b ); // true

/** Mayor o igual que (>=): Comprueba si el primer valor es mayor o igual que el segundo. */
console.log( a >= b ); // true

/** Menor que (<): Comprueba si el primer valor es menor que el segundo. */
console.log( a < b ); // true

/** Menor o igual que (<=): Comprueba si el primer valor es menor o igual que el segundo. */
console.log( a <= b ); // true

/** COMPARACION ENTRE CADENAS DE TEXTO 
 * JavaScript nos permite comparar cadenas de texto de una manera muy sencilla, calculando el valor de cada caracter y reemplazandolo por su equivalente decimal de la tabla ASCII, al sumar cada uno de sus valores JavaScript puede determinar si una cedena es mayor que otra
 * Tabla ACSII: https://elcodigoascii.com.ar/
*/

console.log( 'Laura' === 'Laura' );
console.log( 'Maria Alejandra' > 'Laura' );
console.log( 'Laura' <= 'laura' );
console.log( 'React' !== 'Angular' );