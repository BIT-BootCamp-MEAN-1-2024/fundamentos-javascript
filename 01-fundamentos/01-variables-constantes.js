/**  VARIABLE 
 * Es un espacio de memoria al cual le damos un nombre y al cual le podemos asignar un valor desde su definición o posterior a ella y que puede cambiarse en cualquier momento. Para definir una variable podemos usar las palabras reservadas var o let
*/

/** Usando VAR: Podemos redefinir la variable. Se recomienda usar lo menos posible esta forma de definir variables */
var nombreEspecialista = 'Laura Dayana Campos Molina';
console.log( nombreEspecialista );

var nombreEspecialista = 'Juan Carlos Jiménez Gutiérrez';
console.log( nombreEspecialista );

/** Usando LET: no podemos redefinir la variable */
let nombreMentor = 'Nidia Esperanza Lopez Rivera';
console.log( nombreEspecialista );

nombreMentor = 'Juan Manuel Leal';
console.log( nombreEspecialista );


/** CONSTANTE 
 * Es un espacio de memoria al cual le damos un nombre y al cual le debemos asignar un valor desde su definición, su valor no puede cambiarse. Se recomienda como una convención escribirla totalmente en MAYúSCULAS
*/
const PI = 3.1415;          // En JavaScript la definicion de una constante segun la convención
console.log( PI );          // Imprime: 3.1415

const pi = 3.1416;          // En JavaScript se suele pasar por alto las convenciones y escribir el nombre de la constante como una variable, es decir: usando CamelCase
console.log( pi );          // Imprime: 3.1416

/** Reglas para escribir nombres de variables o constantes 
 * 1. No simbolos diferentes a $ o _ (Siempre al principio)
 * 2. Se recomienda usar camelCase, snake_case, HugaroCase
 * 3. Se recomienda usar todos nombres en minusculas para las variables
 * 4. Se recomienda usar todos los nombres en MAYUSCULAS para las constantes, si la palabra es compuesta CANT_PRODUCTOS
 * 5. No usar como nombre las palabras reservadas del lenguaje.
 * 6. No nombrar dos variables o funciones con el mismo nombre.
 * 7. No iniciar los nombres de variables usando numeros.
*/

// Desplegará los valores del objeto global
// console.log( window );      // en el navegador (FrontEnd). Aquí se agregarán todas las definiciones echas con var a dicho objeto window, en nuestro caso la única que estará disponible en dicho objeto será 'nombreEspecialista' que ha sido definida como var
// console.log( global );      // en el Motor de JavaScript, Node (BackEnd). Aquí no se agregarán las definiciones echas con var al objeto global


/** ACLARACIONES: */
/** El simbolo igual = no equivale a una igualdad, equivale a una asignacion, es decir:
 * 
 *  let edad = 9;
 * 
 * Significa que el valor de 9 (nueve) se le asigna a la variable de nombre edad. En otras palabras edad es una variable (por su definición let), que albergará el valor de 9 (nueve)
 */