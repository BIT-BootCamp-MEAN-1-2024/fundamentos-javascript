/** Bucle FOR: Estructura de control que permite repetir múltiples veces un bloque de código 
    Sintásis:

    for ( inicialización; condición; iteración ) {
        // Bloque de código a repetir
    }
*/

/** Iteración uno a uno hacia adelante */
for ( let i = 0; i < 11; i++ ) {
    console.log( i );
}  
/** Analicemos el codigo anterior
    - La inicialización let i = 0; inicializa el contador i en 0.
    - La condición i < 11; indica que el bucle se ejecutará mientras i sea menor que 11, osea llegará hasta 10.
    - La iteración i++ incrementa el contador i en 1 después de cada iteración del bucle.
 */