/** Función flecha
    También conocida como expresiones de función flecha. Es una alternativa más concisa y moderna de definir una función en JavaScript. Introducida en ES6 (ECMAScript 2015)

    Características:

    - Utilizan el símbolo => para definir la función.
    - Permiten omitir paréntesis para un solo parámetro.
    - Las llaves ({}) son opcionales para un solo comando de retorno.
    - La palabra clave return es opcional para un solo comando de retorno, implícitamente devolviendo su valor.

    Sintáxis:

    // Definicion del cuerpo de la función
    const nombreDeLaFuncion = ( parametro1, parametro2, ... ) => {
        // Sentencias
    }

    // Invocación de una función definida
    nombreDeLaFuncion( valor1, valor2, ... );

    Cuándo usar:

    - Ideales para funciones concisas y anónimas, especialmente en callbacks y expresiones simples.
    - Favorecen la legibilidad del código cuando se utilizan en contextos donde el nombre de la función no es relevante.
    - Útiles para tareas sencillas que no requieren definiciones complejas.
 */

    const holaMundo = () => {
        console.log( 'Hola Mundo!' );
    }
    
    holaMundo();
