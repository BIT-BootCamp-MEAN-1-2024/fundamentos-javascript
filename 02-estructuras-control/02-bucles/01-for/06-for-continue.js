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