/** Función autoejecutable
    Se ejecutan inmediatament después de ser definidas, encapsulando su código y evitando la contaminación del espacio de nombres globales
 */


/** Sintáxis de funcion declarativa anónima */
( function () {
    console.log( 'Hola desde una función anónima declarativa!' );
})();


/** Sintáxis de funcion flecha anónima */
( () => {
    console.log( 'Hola desde una función flecha anónima!' );
})();


/** Sintáxis de funcion abreviada */
! function () {
    console.log( 'Hola desde una función anónima declarativa abreviada!' );
}();
