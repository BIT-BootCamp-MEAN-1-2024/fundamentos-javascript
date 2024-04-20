/** if-else-if: Se utiliza para evaluar múltiples condiciones y ejecutar diferentes bloques de código en función de cuál sea verdadera 
    Sintáxis:

    if( condicion ) {
        Sentencias que se ejecutarán si se cumple la condición
    }
    else if( condicion ) {
        Sentencias que se ejecutarán si NO se cumple la primera condición
    }
    else {
        Sentencias que se ejecutarán si NO se cumple ninguna condición
    }
*/
const nota = 5;

if ( nota >= 4.5 ) {
    console.log( 'Excelente' );
} 
else if ( nota >= 4 ) {
    console.log( 'Muy bien' );
} 
else if ( nota >= 3.5 ) {
    console.log( 'Bueno' );
} 
else if ( nota >= 3 ) {
    console.log( 'Suficiente' );
} 
else {
    console.log( 'Insuficiente' );
}