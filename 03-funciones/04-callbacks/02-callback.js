/** ¿Para qué se usan los callbacks?
    Se usan principalmente para manejar operaciones asíncronas, es decir, operaciones que tardan un tiempo en completarse. Ej:
    - Cuando se hace una petición a un servidor para obtener datos, la función callback se ejecuta cuando los datos se han cargado
    - Cuando se produce un evento en una página web, como un clic en un botón, la función callback se ejecuta en respuesta a ese evento
    - Las animaciones en JavaScript suelen usar callbacks para actualizar el estado de la animación a medida que se va ejecutando.

    Algunos ejemplos de implementación de Callbacks en la cotidianidad del desarrollo de la lógica de programación en JavaScript
 */


const names = [ 'Sebastian', 'Nicolas', 'Johan', 'Felipe', 'Carlos' ];

/** ITERANDO una lista usando forEach */
// Usando funciones clasicas
names.forEach( function ( name, index ) {
    console.log( index + ' ' + name );   
});

// Usando funciones flecha (Arrow function)
names.forEach( ( name, index ) => console.log( index + ' ' + name ));

/** En el ejemplo anterior el método forEach que puede ser usado en listas requiere que se le pase una función como parámetro para poder realizar su iteración */

/** FILTRANDO valores de una lista usando filter */
const nuevosNombres = names.filter( function( name ) {
    return name != 'Carlos';
});

console.log( nuevosNombres );