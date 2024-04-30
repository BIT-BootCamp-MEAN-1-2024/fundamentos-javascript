/** Función anónima
    Es una sintáxis alternativa para definir funciones anónimas (o sin nombre), de manera mas concisa y elegante.
    Una funcion de expresión hace uso de una función anónima
 */

// Definicion del cuerpo de la función
const saludar = function () {
    console.log( 'Hola desde una función anónima!' );
}

saludar();      // Invocación de una función definida

/** Otro ejemplo de una función anónima es la que usamos cuando definimos un Callback, mas adelante veremos que es un Callback */
const fruits = [ 'Mango', 'Maracuyá', 'Mangostino', 'Mora', 'Mandarina' ];

fruits.forEach( function ( fruit ) {
    console.log( fruit );
});