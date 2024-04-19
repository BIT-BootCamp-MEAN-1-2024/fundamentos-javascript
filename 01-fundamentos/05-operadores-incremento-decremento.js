/** OPERADORES DE INCREMENTO/DECREMENTO 
    Sirven para aumentar o disminuir el valor de una variable en una unidad.
*/

/** Define unas variables y se les asigna un valor */
let a = 5;
let b = 10;

/** Operador de incremento (++): */
a++;                // Incrementa el valor de 'a' en una unidad
console.log( a );   // Imprimirá 6

/** Operador de decremento (--): */
b--;                // Decrementa el valor de 'b' en una unidad
console.log( b );   // Imprimirá 9


/** Usando el operador de INCREMENTO/DECREMENTO como SUFIJO o PREFIJO */

/** Sufijo: 
 *  El operador se coloca después de la variable (variable++ o variable--). Primero devuelve el valor de la variable y luego incrementa o decrementa su valor. */
console.log( a++ );   // Imprimirá 6
console.log( b++ );   // Imprimirá 9

/** Prefijo: 
 *  El operador se coloca antes de la variable (++variable o --variable). Primero incrementa o decrementa el valor de la variable y luego devuelve el nuevo valor. */
console.log( ++a );   // Imprimirá 8
console.log( ++b );   // Imprimirá 11