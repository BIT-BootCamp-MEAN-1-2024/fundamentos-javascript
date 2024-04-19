/** INTERACCIONES usando prompt, console, alert, comfirm */

// Solicitar al usuario que ingrese su nombre usando prompt
const nombreUsuario = prompt( "Por favor, ingresa tu nombre:" );

// Mostrar un mensaje en la consola saludando al usuario
console.log( `Hola, ${nombreUsuario}! Bienvenido a mi página.` );

// Mostrar un mensaje emergente (alert) con información adicional
alert( `Hola, ${nombreUsuario}! Bienvenido a mi página. Haz clic en OK para continuar.` );

// Confirmar si el usuario desea recibir notificaciones
const confirmacion = confirm( "¿Te gustaría recibir notificaciones?" );
if ( confirmacion ) {
    console.log("Genial! Te enviaremos notificaciones cuando haya novedades.");
} 
else {
    console.log("Entiendo. Sin embargo, no recibirás notificaciones por ahora.");
}