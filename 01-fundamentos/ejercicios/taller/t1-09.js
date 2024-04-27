// 9. Utilizar console.log para imprimir mensajes de depuración durante la ejecución de un programa sencillo que realice alguna tarea específica.

const nombreCompleto = prompt( 'Digita tu nombre completo' );
console.log( nombreCompleto );

const listaNombres = nombreCompleto.split( '  ' );
console.log( listaNombres );

console.log( listaNombres.length );

console.log( 'Tu nombre lo conforman ' + listaNombres.length + ' nombres' );

