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