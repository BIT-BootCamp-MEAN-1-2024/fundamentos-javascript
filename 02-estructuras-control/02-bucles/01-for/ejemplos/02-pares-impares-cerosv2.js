/** De una lista de #s dados determinar cuantos son: pares, impares o cero 
    Solucion dada por el mentor: Juan Manuel
*/

const numeros = [ 5, 7, 0, 8, 1, 5, 3, 9, 2 ];      // Define una lista con valores enteros predeterminados

/** Se inicializan variables que van a funcionar como contadores */
pares = 0
impares = 0             
ceros = 0

/** Bucle que se repetira tantas veces la longitud de la lista */
for ( i = 0; i < numeros.length; i++ ) {

    // Se una un operador ternario anidado para poder contar los: pares, impares y ceros
    numeros[i] != 0
        ? numeros[ i ] % 2 == 0
            ? pares++
            : impares++       
        : ceros++

}

/** Imprime el resultado esperado en enunciado */
console.log(numeros)
console.log(`hay ${pares} numeros pares`)
console.log(`hay ${impares} numeros impares`)
console.log(`hay ${ceros} numeros ceros`)
