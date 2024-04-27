// 10. Pedir al usuario que confirme si desea realizar una acción utilizando confirm, y mostrar un mensaje según su respuesta.

const nombre = prompt( 'Digita tu nombre' );
const hayReserva = confirm( `${ nombre } confirmas la reserva de tus vacaciones?` );

if( hayReserva )
    alert( `${ nombre } bienvenido a su hotel la playa azul` );
else
    alert( `Lamentamos que hayas desistido de tu reserva` );

