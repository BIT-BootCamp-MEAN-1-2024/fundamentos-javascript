# Taller 2 - Básico

Este taller es de nivel básico y pretende afianzar los conocimientos adquiridos sobre los fundamentos de JavaScript.

1. Crea una función para que calcule el promedio de al menos 3 notas y que retorne el valor de la letra asociada:

    | Calificación | Equivalente en letras |
    | ---  | --- |
    | Entre 4.8 <= 5.0 | E = Excelente |
    | Entre 4.5 < 4.8 | MB = Muy bueno |
    | Entre 4.0 < 4.4 | B = Bueno |
    | Entre 3.5 < 4.0 | A = Aprobado |
    | Entre 0 < 3.5 | R = Reprobado |

2. Completa la función `operation` para que realice las 4 operaciones básicas: suma, resta, multiplicacion y division. Dicha funcion debe tomar 3 argumentos: el operador, el primer valor y el segundo valor, además debe retornar el resultado.

    ```
    function operation( operator, firstValue, secondValue ) {
        // Escribe la lógica de tu solución aquí
        
        return result;
    }
    ```

    Al invocar la funcion `operation` condiferentes argumentos los resultados deberían ser los siguientes:

    ```
    ('+', 3, 6) --> 9
    ('-', 7, 3) --> -4
    ('*', 9, 9) --> 81
    ('/', 15, 3) --> 5
    ```

3. En una granja remota, un grupo de ovejas se encuentra en peligro. Están encerradas en diferentes corrales, algunas sanas y salvas, pero otras enfermas o incluso enfrentando la amenaza de un lobo feroz. Tu misión, como programador experto, es crear un programa en JavaScript que te ayude a rescatar a las ovejas vivas y preparar el terreno para su futuro bienestar.

    ```
        const corrales = [
            [ 'oveja', 'oveja', '', 'oveja', '' ],
            [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
            [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
        ]
   ```

    La siguiente lista `corrales` representa los corrales. 
    
    Cada posición en la lista contiene un string que indica el estado de un animal:
    - `oveja`: Oveja sana y salva.
    - `muerta`: Oveja que necesita ser removida del corral.
    - `lobo`: ¡Un peligro para las ovejas!
    - `''`: Un espacio libre en el corral.
   

   Objetivos:

   Usando funciones deberás realizar las siguientes tareas:

    1. **Contar las ovejas vivas:** Recorre cada corral y determina cuántas ovejas sanas y salvas hay en total.

    2. **Contar los espacios libres:** Identifica cuántos espacios vacíos hay en los corrales, considerando que los espacios con animales muertos también deben ser liberados.

    3. **Neutralizar al lobo:** Si encuentras un lobo en algún corral, elimínalo (imagina que lo conviertes en una útil chaqueta de piel) y cuenta el espacio que deja libre como si estuviera vacío.

    4. **Incorporar nuevas ovejas:** Utiliza el dinero obtenido por eliminar lobos para comprar 2 nuevas ovejas por cada uno. Busca espacios libres en los corrales para colocarlas y aumentar la población ovina.

## ¿Cómo se calificará el taller?

1. El primer y segundo punto, tienen un valor de 1 cada uno.
2. El tercer punto, tiene un valor de 4 puntos, es decir:
     - 1 punto por **contar las ovejas vivas**
     - 1 punto por **contar los espacios libres**
     - 1 punto por **neutralizar al lobo**
     - 1 punto por **incorporar nuevas ovejas**

El taller tiene un total posible de 6 puntos.

- La calificación será de 0 a 5.
- Si se logran los 6 puntos la nota será de 5.
- Si fallan uno de los 6 puntos, como cada punto vale 1, la calificación será igualmente 5 (lo que les da ventaja en caso de errar uno de los puntos)
- En caso de contestar menos de 4, la nota será el valor total de los puntos adquiridos por cada respuesta correcta.
