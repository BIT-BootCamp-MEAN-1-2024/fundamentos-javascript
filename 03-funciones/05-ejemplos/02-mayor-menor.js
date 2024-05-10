/** Obtiene el # mayor de una lista de #s enteros dada */
function getNumMayor ( numeros ) { 

    let tempMayor = numeros[ 0 ]            // Asigno el primer # de la lista a una variable temporal

    /** Bucle itero tantos enteros hay en la lista */
    for (let i = 0; i < numeros.length; i++) {
        /** Valido si el numero que se encuentra en la variable temporal es menor a el # en la posicion de la lista en la que estamos iterando */
        if( tempMayor < numeros[i] ) {
            tempMayor = numeros[i];     // Se reasigna el # de mayor valor de la variable temporal en funcion de la condicion del if
        }
    }

    /** Se imprime el mensaje indicando el mayor de los #s de la lista */
    console.log( numeros, `El mayor es: ${tempMayor}` );
}


/** IMPLEMENTACION */
numeros1 = [8, 14, 16, 89, 45]
numeros2 = [78, 85, 25, 65, 10]
numeros3 = [78, 56, 4, 1, 25]

getNumMayor(numeros1)
getNumMayor(numeros2)
getNumMayor(numeros3)