/** Bucle WHILE anidado */
let i = 1;

while (i <= 10) {
    console.log(`Tabla de multiplicar del ${i}:`);

    let j = 1;
    while (j <= 10) {
        console.log(` ${i} x ${j} = ${i * j} `);
        j++;
    }

    console.log(''); // Agregar una línea en blanco para separar las tablas
    i++;
}