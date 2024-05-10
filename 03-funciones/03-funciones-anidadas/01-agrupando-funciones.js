/** Funcion que agrupa a otras funciones */
function operaciones (x, y) {

    /** Suma dos valores (Funcion interna o anidada) */
    function sumar (a, b) {
    
        return a + b 
    }
    
    /** Resta dos valores (Funcion interna o anidada) */
    function restar (j, p) {
    
        return j - p
    }

    const resultados = {
        suma: sumar(x, y),      // Invoca la funcion para sumar y asigna el valor a la propiedad 'suma' del objeto 'resultados'
        resta: restar(x, y)     // Invoca la funcion para restar y asigna el valor a la propiedad 'suma' del objeto 'resultados'
    }
    // console.log( sumar( x, y ) )     //15
    // console.log( restar( x, y ) )    //-5
    return resultados
}

console.log( operaciones( 5, 10 ) );    // { suma: 15, resta: -5 }