/** Función declarativa o tradicional
    Es la forma clásica para definir funciones en JavaScript. Su sintáxis es la siguiente

    Características:

    - Utilizan la palabra clave function seguida del nombre de la función.
    - Permiten definir parámetros entre paréntesis.
    - Las llaves ({}) encierran las instrucciones del código que se ejecutan cuando se invoca la función.
    - Pueden devolver valores utilizando la palabra clave return.

    Sintáxis:

    // Definicion del cuerpo de la función
    function nombreDeLaFuncion ( parametro1, parametro2, ... ) {
        // Sentencias
    }

    // Invocación de una función definida
    nombreDeLaFuncion( valor1, valor2, ... );

    Cuándo usar:

    - Se recomiendan cuando se necesita definir funciones con nombres explícitos y alcance de función tradicional.
    - Útiles para funciones autoejecutables y funciones constructoras.
    - Adecuadas para código más complejo que requiere múltiples instrucciones y bloques de código.
 */

function holaMundo () {
    console.log( 'Hola Mundo!' );
}

holaMundo();
