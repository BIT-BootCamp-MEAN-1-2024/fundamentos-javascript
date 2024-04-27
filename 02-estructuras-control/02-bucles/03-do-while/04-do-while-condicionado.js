/** Incremento o decremento condicionado */
let i = 1;

do {
    if ( i % 2 !== 0 ) {
        console.log( i );
    }
    i += 2;
} while ( i <= 10 );

/** Analicemos el codigo anterior
    Funciona exactamente igual que el ejemplo anterior, pero tenemos un condicional que se ejecutará tantas veces como se ejecute el bucle.
*/