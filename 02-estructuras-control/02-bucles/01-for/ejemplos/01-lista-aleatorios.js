/** Crear una lista de numeros aleatorios de una longitud que pueda determinar el usuario */

console.log( Math.random() );                     // Math.random() genera #s aleatorios entre 0 y 1
console.log( parseInt( Math.random() ) )          // Convierte el # aleatorio en un valor entero (siempre es cero por que toma la parte decimal)
console.log( parseInt( Math.random() * 10 ) )     // Convierte el # aleatorio en un valor entero entre 0 y 10 (toma la parte decimal);

const lista = [];                           // Define una lista vacia

/** Bucle para iterar 16 veces */
for ( let i = 0; i < 16; i++ ) {
    const decimal =  Math.random() * 10;    // Genera un # aleatorio entre 0 y 10
    const entero = parseInt( decimal );     // Convierte el # generado en un entero

    lista.push( entero );                   // Inserta al final de la lista cada # generado
}

console.log( lista );                       // Imprime la lista completa de #s generados