/** Función Recursiva
    Son aquellas que se invocan a si mismas dentro de su propia definición, permitiendo realizar tareas repetitivas de manera eficiente
 */

function factorial( n ) {
    if ( n === 0 ) {
        return 1;
    } 
    else {
        return n * factorial( n - 1 );
    }
}

console.log( factorial( 5 ) ); // Imprime 120