/** Bucle WHILE: Estructura de control que permite repetir múltiples veces un bloque de código 
    Sintásis:

    inicialización;
    while (  condición ) {
        // Bloque de código a repetir

        iteración (incremento/decremento)
    }
*/

/** Iteración uno a uno hacia adelante */
let i = 0;

while ( i < 11 ) {
    console.log( i );
    i++;
}

/** Analicemos el codigo anterior
    - La inicialización let i = 0; inicializa el contador i en 0.
    - La condición i < 11; indica que el bucle se ejecutará mientras i sea menor que 11, osea llegará hasta 10.
    - La iteración i++ incrementa el contador i en 1 después de cada iteración del bucle.
 */
