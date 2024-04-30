// 7. Escribe un programa que tome un string como entrada y cuente el número de vocales que contiene.
// Carlos Triana

function vocalesN( str ) {
    let letras = str.split( '' );   // juan --> [ 'j', 'u', 'a', 'n' ]

    return contar( letras );
}

function contar( array ) {
    // array = [ 'C', 'u', 'a', 'l', 'q', 'u', 'i', 'e', 'r', ' ', 't', 'e', 'x', 't',  'o' ]
    let vocales = array.filter( letra => [ 'a','e', 'i', 'o','u' ].includes( letra.toLowerCase() ) );

    // [ 'u', 'a', 'u', 'i' ]

    console.log( 'Las vocales que contiene son: ' + vocales.length );
}

vocalesN( 'abeCeDArio' );