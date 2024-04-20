/** Bucle FOR: Estructura de control que permite repetir múltiples veces un bloque de código 
    Sintásis:

    for ( inicialización; condición; iteración ) {
        // Bloque de código a repetir
    }
*/

/** Iteración uno a uno hacia adelante */
for ( let i = 1; i < 11; i++ ) {
    console.log( i );
}  
/** Analicemos el codigo anterior
    - La inicialización let i = 0; inicializa el contador i en 0.
    - La condición i < 11; indica que el bucle se ejecutará mientras i sea menor que 11, osea llegará hasta 10.
    - La iteración i++ incrementa el contador i en 1 después de cada iteración del bucle.
 */

/** Iteración uno a uno hacia atrás */
for ( let i = 10; i > 0; i-- ) {
    console.log( i );
} 
/** Analicemos el codigo anterior
    - La inicialización let i = 10; inicializa el contador i en 10.
    - La condición i > 0; indica que el bucle se ejecutará mientras i sea menor que 0, osea que inicializará en 1.
    - La iteración i-- decrementa el contador i en 1 después de cada iteración del bucle.
 */

/** Incremento o decremento personalizado */
for ( let i = 1; i <= 10; i += 2 ) {
    console.log( i );
}
/** Analicemos el codigo anterior
    - La inicialización let i = 01; inicializa el contador i en 1.
    - La condición i <= 10; indica que el bucle se ejecutará mientras i sea menor e igual que 10, osea llegará hasta 10.
    - La iteración i += 2 incrementa el contador i en 2 después de cada iteración del bucle.
 */

/** Incremento o decremento condicionado */
for ( let i = 1; i <= 10; i += 2 ) {
    if( i % 2 == 0 ) {
        console.log( i );
    }
}
/** Analicemos el codigo anterior
    Funciona exactamente igual que el ejemplo anterior, pero tenemos un condicional que se ejecutará tantas veces como se ejecute el bucle.
 */

/** Detener un bucle
    Para detener la ejecución de un bucle debemos hacer uso de la palabra reservada 'break', esto detendrá la ejecución del mismo, interrumpiendolo por completo.
    Ejemplo: Vamos a crear una iteración de 0 a 10 y detendremos el bucle cuando encontremos el número 3
*/
for ( let i = 0; i < 11; i++ ) {
    if ( i === 3 ) {
        break;
    }

    console.log( i );
}
// Salida: 0, 1, 2

/** Saltar una de las iteraciones del bucle 
    Para saltar la ejecución de un bucle debemos hacer uso de la palabra reservada 'continue', esto hará que dicho iteración no sea tenida encuenta y se continue con la iteración hasta finalizar dicho bucle.
    Ejemplo: Vamos a crear una iteración de 0 a 10 y saltaremos el bucle cuando encontremos el número 3, para que continue hasta finalizar el mismo.
*/
for ( let i = 0; i < 11; i++ ) {
    if ( i === 3 ) {
        continue;
    }

    console.log( i );
}
// Salida: 0, 1, 2, 4, 5, 6, 7, 8, 9, 10

/** Bucle FOR anidado */
for ( let i = 1; i <= 10; i++ ) {
    console.log( `Tabla de multiplicar del ${i}:` );

    for ( let j = 1; j <= 10; j++ ) {
      console.log( ` ${i} x ${j} = ${i * j} ` );
    }

    console.log(''); // Agregar una línea en blanco para separar las tablas
  }
