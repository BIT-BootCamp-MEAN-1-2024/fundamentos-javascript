/** DEFINICION DE LAS FUNCIONES */

/** Suma 2 #s pasados a la función */
function sumar (num1, num2) {

    return num1 + num2;         // Retorna o devuelve el valor calculado donde fue invocada la funcion.
}

/** Resta 2 #s pasados a la función */
function restar ( num1, num2 ) {
    console.log( 'Imprimo desde dentro el resultado de la resta: ' + ( num1 - num2 ) )

}


/** IMPLEMENTACION */
const a = 5;
const b = 8;

let resultado = sumar( b, a );  // Invoca o ejecuta la funcion suma y recibe el valor del calculo y es asignado a la variable 'resultado'
console.log( 'imprimo desde fuera el resultado de la suma: ' + resultado );

restar( b, a );                 // Invoca o ejecuta la funcion resta, quien imprime desde dentro el resultado