/** Las variables en JavaScript pueden almacenar todos los tipos de datos 
 * Para poder visualizarlo con claridad vamos a usar el operador typeof el cual nos indicara el tipo de dato que posee una variable
*/

let numero;

console.log( numero, typeof numero );      // undefined undefined

numero = null;
console.log( numero, typeof numero );      // null object (Bug del lenguaje): 
// Para validar correctamente si una variable es null deberas hacer lo siguiente
console.log( numero === null );

numero = 0;
numero + 9;           
console.log( numero, typeof numero );      // 0 number

numero = numero + 1;        
console.log( numero, typeof numero );      // 1 number

numero++;                   
console.log( numero, typeof numero );      // 2 number -> Operador de incremento ++

numero--;                   
console.log( numero, typeof numero );      // 1 number -> Operador de decremento --

numero = true;
console.log( numero, typeof numero );      // true boolean

numero = 'Cesar Humberto Martinez Tique';
console.log( numero, typeof numero );      // 'Cesar Humberto Martinez Tique' string

numero = BigInt( Number.MAX_SAFE_INTEGER ) + BigInt( 1 );
console.log( numero, typeof numero );      // 9007199254740992n bigint

numero = Symbol( 'Desarrollador' );
console.log( numero, typeof numero );      // Symbol(Desarrollador) symbol

/** NOTA:
 * Como podemos ver la misma variable puede soportar almacenar diferentes tipos de datos en diferentes momentos. Esto no se puede hacer en los lenguajes de tipado fuerte, ya que al igual que JavaScript inferira el tipo de dato inicial del valor asignado la primera ves y obligara a que los datos almacenados en dicha variable sean siempre el mismo tipo de dato. En JavaScript por el contrario esto no ocurre.
 */