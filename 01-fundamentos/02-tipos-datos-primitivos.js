/** TIPOS DE DATOS PRIMITIVOS
 * Los tipos de datos primitivos en JavaScript son los siguientes:
    - number (NaN: 'hola' + 1, Infinity: 1 / 0, -Infinity: -1 / 0)
    - string
    - boolean
    - null
    - undefined
    - symbol
    - bigint

  Existen tambien tipos de datos compuestos y estos son:
    - Objects
    - Arrays
    - Functions
*/  


/** string: Representa cadenas de caracteres (texto). Deben ir encerradas entre:
 *          - comillas simples:     'Hola Mundo!'
 *          - comillas dobles:      "Hola Mundo!"
 *          - backticks:            `Hola Mundo!`           // Especificacion nueva del ECMAScript
*/

const nombreBootcamp = 'Desarrollo Web MEAN Stack';
let especialista = "Juan C Jimenez G";
let mentor = `Juan M Leal`;

console.log( nombreBootcamp, especialista, mentor );

/** CONCATENACION: 
    Proceso para unir 2 o mas cadenas o variables. Existen dos maneras de hacerlo:
    - Usando el operador de suma +
    - Usando el concepto del ECMaScript denominado como 'template string'
*/

console.log( 'En BIT se dicta el BootCamp de ' + nombreBootcamp + ' impartido por ' + especialista + ' en compañia del mentor presencial ' + mentor );  // Ejemplo usando el operador de suma o concatenación +
console.log( `En BIT se dicta el BootCamp de ${ nombreBootcamp } impartido por ${ especialista } en compañia del mentor presencial ${ mentor }` );      // Ejemplo usando el concepto de "template string"

/** Un 'template string' requiere el uso de 
 *  - Las backtics `` (tildes invertidas) para envolver tanto cadenas estaticas como variables. 
 *  - Las interpolaciones ${} para desplegar el valor de las variables dentro de las backtics 
 * */

/** number: Representa numeros enteros o decimales (positivos y negativos)
 *          Por ejemplo, 10, 3.14, -5, etc.
 */
const PI = 3.1415;
let edad = 10;
let respuesta = -5;
console.log( PI, edad, respuesta );

/** boolean: Representa un valor entre falso & verdadero */
let esMujer = false;
let esDesarrollador = true;
let estudiaEnBit = true;

console.log( esMujer, esDesarrollador, estudiaEnBit );

/** null: Representa la ausencia de valor de forma intencional */
let apodoMascota = null;
console.log( apodoMascota );        // null

/** undefined: Se utiliza para representar un valor no definido. Si una variable no ha sido inicializada por ejemplo */
let estadoCivil;
console.log( estadoCivil );

/** BigInt: Introducido en ECMAScript 2020, representa números enteros mayores que el límite seguro para el tipo de dato Number. Se utiliza para representar números enteros arbitrariamente grandes. */
const bigNumber = BigInt( Number.MAX_SAFE_INTEGER ) + BigInt( 1 );
console.log( bigNumber );                                           // Imprimirá el número más grande posible en JavaScript

// Number.MAX_SAFE_INTEGER es una constante en JavaScript que representa el número entero más grande que se puede representar de forma segura y precisa con el tipo de dato Number. 
// Este valor es 2 a la 53 menos 1, que es 9007199254740991. Los números más grandes que este pueden no ser representados con precisión y pueden perder información debido a la limitación de la precisión de 64 bits del estándar IEEE 754

/** Symbol (Símbolo): Introducido en ECMAScript 6, representa un identificador único. 
 * Los símbolos se utilizan principalmente como claves de propiedad de objetos cuando se desea que la propiedad sea privada o única. 
 */

const symbolId = Symbol();
console.log( symbolId );

const symbolDescription = Symbol('description');
console.log( symbolDescription );

const symbolDescription2 = Symbol('description');
console.log( symbolDescription2 );

console.log( symbolDescription == symbolDescription2 );

const producto = {
  [symbolId]: 'ID tipo Symbol'
};

console.log( producto[ symbolId ] ); // Imprime 'ID tipo Symbol'
