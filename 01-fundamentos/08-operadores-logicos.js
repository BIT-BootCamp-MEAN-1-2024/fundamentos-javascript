/** OPERADORES LOGICOS 
    | Operador | Descripción            | Ejemplo                   |
    |----------|------------------------|---------------------------|
    | &&       | AND lógico             | a && b                    |
    | ||       | OR lógico              | a || b                    |
    | !        | NOT lógico             | !a                        |

*/

/** Define valores constantes */
const a = true;
const b = false;

/** AND lógico (&&): Retorna true si ambos operandos son true, de lo contrario retorna false. */
console.log( a && b ); // false

/** OR lógico (||): Retorna true si al menos uno de los operandos es true, de lo contrario retorna false. */
console.log(a || b); // true

/** NOT lógico (!): Retorna true si el operando es false, y retorna false si el operando es true. */
console.log( !a ); // false
console.log( !b ); // true