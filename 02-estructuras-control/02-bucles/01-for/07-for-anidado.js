/** Bucle FOR anidado */
for ( let i = 1; i <= 10; i++ ) {
    console.log( `Tabla de multiplicar del ${i}:` );

    for ( let j = 1; j <= 10; j++ ) {
      console.log( ` ${i} x ${j} = ${i * j} ` );
    }

    console.log(''); // Agregar una línea en blanco para separar las tablas
}
