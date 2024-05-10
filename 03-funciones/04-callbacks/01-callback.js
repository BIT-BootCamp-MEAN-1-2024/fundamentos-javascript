/** Callback
    En JavaScript es una función que se pasa como argumento a otra función.
*/

// Funcion Exterior
// La función externa (que recibe el callback) la ejecuta en un momento posterior, una vez que haya completado alguna tarea o proceso. Esto permite que el código continúe ejecutándose sin tener que esperar a que finalice la tarea o proceso lento.
function cargarDatos( url, callback ) {

    if( ! url ) {
        throw new Error( 'La url no existe. Error al cargar los datos' );
    // }

    // Simula una petición HTTP asíncrona usando un setTimeout de 2000ms
    setTimeout( () => {
        const datos = {
            nombre: "Juan Pérez",
            edad: 30,
            ciudad: "Bogotá"
        };

        callback( datos );  // Se ejecuta la función anónima y regresará los datos que se le pasan como parámetro al cuerpo del callback    
    }, 2000 );
}

/** Define el Callback: 
 * 1. La funcion cargarDatos() recibe como parámetro una función anónima 
 * 2. La funcion anonima solo se ejecuta cuando se invoca dentro de la función cargarDatos */
cargarDatos( "https://ejemplo.com/datos", function( datos ) {       // datos es el valor recibido por la funcion anónima, producto de la invocación del callback en la línea 21
    console.log( "Datos cargados:", datos );                    
});