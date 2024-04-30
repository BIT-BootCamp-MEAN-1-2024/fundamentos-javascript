// 8. Escribe un programa JavaScript que genere un número aleatorio entre 1 y 10 y le pida al usuario que lo adivine. El programa debe dar pistas al usuario si su suposición es demasiado alta o demasiado baja hasta que logre adivinar el número correcto.
// Version Juan Carlos

function generarAleatorio () {
    const numeroAleatorio = Math.random();              // Genera # entre 0 y 1...   0.2432345435
    const decimal = numeroAleatorio * 10;               // Convierte  0.2432345435 --> 2.432345435
    const redondeadoAlPiso = Math.floor( decimal );     // Redondea al menor:  9.124324 -> 9, 9.845645 -> 9 (Entonces nunca llegamos a 10)
    const numeroFinal = redondeadoAlPiso + 1;           // Sumamos 1 para que llegue a 10

    return numeroFinal;
    return Math.floor( Math.random() * 10 ) + 1;        // Forma abreviada de todo lo que hace esta funcion
}

// console.log( generarAleatorio() );


function adivina() {
    const numeroAleatorio = generarAleatorio();
    console.log( numeroAleatorio );

    let numeroUsuario;
    let intentos = 0;

    while( numeroUsuario !== numeroAleatorio ) {
        intentos += 1;      // intentos++ o intentos = intentos + 1 
        numeroUsuario = parseInt( prompt( `Adivina un # entre 1 y 10` ) );

        if( numeroUsuario < numeroAleatorio ) {
            console.log( 'El numero que has insertado es demasiado bajo' );
        }
        else if( numeroUsuario > numeroAleatorio ) {
            console.log( 'El numero que has insertado es demasiado alto')
        }
    }

    console.log( `Has adivinado el numero en ${ intentos } intentos.` );
}

adivina();