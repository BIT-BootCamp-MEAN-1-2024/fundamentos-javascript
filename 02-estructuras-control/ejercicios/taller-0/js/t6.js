// 6. Escribe un programa que tome como entrada tus nombres y apellidos completos y cuente cuantos caracteres tiene, sin tener en cuenta los espacios.
// Version Cesar Martinez

function oracionSinEspacios( oracion ) {
    let contable = 0;

    //hola mundo!

    for( let i = 0; i < oracion.length; i++ ) {
        if( oracion[ i ] !== ' ' ) {
            contable++;
        }
    }

    return contable;
}

let oracion = prompt( 'Escriba una oracion' );
let contenidoOracion = oracionSinEspacios( oracion );

console.log( `contenido de la oracion "${ oracion }" tiene ${ contenidoOracion } letras sin contar los espacios` );