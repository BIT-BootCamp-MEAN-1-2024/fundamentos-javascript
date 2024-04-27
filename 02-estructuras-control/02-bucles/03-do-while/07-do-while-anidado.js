let i = 1;

do {
    console.log( `Tabla de multiplicar del ${ i }:` );

    let j = 1;

    do {
        console.log( ` ${i} x ${j} = ${i * j} ` );
        j++;
    } while ( j <= 10 );

    console.log( '' ); // Agregar una línea en blanco para separar las tablas
    i++;
} while ( i <= 10 );
