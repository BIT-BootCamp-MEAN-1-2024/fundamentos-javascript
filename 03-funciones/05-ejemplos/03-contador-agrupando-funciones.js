/** Funcion que agrupa a otras funciones */
function contador ( n ) {

    /** Funcion anonima (interna o anidada) */
    return function () {

        return n++
    }
}

const result = contador( 0 )    // Invoca la funcion contador() que recibe un valor y quien retorna el cuerpo de otra funcion que va a ser asignada a la constante 'result'

for ( let i = 0; i < 11; i++ ) {
    console.log( result() )     // Invoca la funcion interna o anidada contenida en 'result' e imprime tantas veces como el buble la invoca el valor de 'n'
}