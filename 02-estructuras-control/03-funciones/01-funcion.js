/** Funciones:
    Son bloques de código que realizan una tarea específica y que se pueden reutilizar.
    - Al invocar una funcion podría recibir o no un conjunto de valores
    - Al invocar una funcion esta podría devolver un valor o no

    Las principales características de una función, son:
    - Modularidad:      Significa que podemos dividir el código en bloques independientes, separando cada una de las tareas que deseamos ejecutar, facilitando la organización y la mantenibilidad del código
    - Reutilización:    Significa que podemos hacer uso de este todas las veces que lo necesitemos a través de la invocación de una función por su nombre, evitando con esto la duplicidad de código
    - Encapsulación:    Se dice que un código está encapsulado cuando se oculta la implementación interna de un bloque de código alojado dentro de una función, exponiendo solo la interfaz pública (entradas y salidas), lo que promueve la separación de tareas en bloques separados.
    - Abstracción:      Permite trabajar con conceptos de alto nivel como la ocultación de detalles de bajo nivel de la implementación.

    Sintáxis

    // Definicion del cuerpo de la función
    function nombreDeLaFuncion ( parametro1, parametro2, ... ) {
        // Sentencias
    }

    // Invocación de una función definida
    nombreDeLaFuncion( valor1, valor2, ... );
 */

// Definicion del cuerpo de la función
function saludar() {
    console.log( 'Hola Mundo' );
}

saludar();      // Invocación de una función definida