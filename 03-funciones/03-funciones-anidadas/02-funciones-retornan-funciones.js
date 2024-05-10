/** Funcion que agrupa a otras funciones */
function helloWorld () {

    /** Funcion anonima (interna o anidada) */
    return function () {
    
        return 'hello world'
    }
}
const saludar = helloWorld()    // Invoca la funcion helloWorld() quien retorna el cuerpo de otra funcion que va a ser asignada a la constante saludar
console.log( saludar() )        // Invoca la funcion interna o anidada contenida en saludar e imprime lo que esta funcion interna retorna 'hello world'