/** OPERADORES ARITMETICOS 
    +  Suma
    -  Resta
    *  Multiplicacion
    /  Division (Resultado de la division)
    %  Modulo (Residuo de la division)
    ** Exponente
*/

let a = 10;
let b = 3;
let c = 2;

const result = ( ( a + b ) * c - (a / b) % c ) ** 2 + ++a - --b * c;
console.log(result);        // 615.4444444444445


/** JERARQUIA DE OPERADORES 
 * Tabla Oficial de precedencia: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence#tabla

    | Precedencia | Operador  | Descripción                               |
    |-------------|-----------|-------------------------------------------|
    | 1           | ()        | Paréntesis (altera el orden de evaluación)|
    | 2           | **        | Exponenciación                            |
    | 3           | ++ --     | Incremento/decremento prefijo             |
    |             |           | (antes de la variable)                    |
    | 4           | ++ --     | Incremento/decremento postfijo            |
    |             |           | (después de la variable)                  |
    |             | + -       | Operadores unarios (positivo, negativo)   |
    |             | !         | Negación lógica (NOT)                     |
    | 5           | * / %     | Multiplicación, división, módulo          |
    | 6           | + -       | Adición, sustracción                      |
*/
