/** Bucle Do-WHILE: Estructura de control que permite repetir múltiples veces un bloque de código. Sin embargo, este se ejecutará al menos una vez.
    Sintásis:

    inicialización;
    do {
        // Bloque de código a repetir

        iteración;
    } while ( condición ) {
        
*/

/** Iteración uno a uno hacia adelante */
let i = 0;

do {
    console.log( i );
    i++;
} while ( i < 11 );
/** Analicemos el codigo anterior
    - La inicialización let i = 0; inicializa el contador i en 0.
    - La condición i < 11; indica que el bucle se ejecutará mientras i sea menor que 11, osea llegará hasta 10.
    - La iteración i++ incrementa el contador i en 1 después de cada iteración del bucle.
 */

