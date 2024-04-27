/** Incremento o decremento condicionado */
let i = 1;

while ( i <= 10 ) {
    if ( i % 2 != 0 ) {
        console.log( i );
    }
    i += 2;
}

/** Analicemos el codigo anterior
    Funciona exactamente igual que el ejemplo anterior, pero tenemos un condicional que se ejecutará tantas veces como se ejecute el bucle.
*/