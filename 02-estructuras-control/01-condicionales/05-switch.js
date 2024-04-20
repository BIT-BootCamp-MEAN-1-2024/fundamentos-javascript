/** Switch: Permite evaluar una expresión y ejecutar diferentes bloques dependiendo del valor de dicha expresión como una casuistica o conjunto de casos que pueden ocurrir y que deben ser evaluados, incluido una casuistica por defecto */

/** Cada caso separado por bloque de ejecución */
let diaDeLaSemana = 3;
let mensaje;

switch ( diaDeLaSemana ) {
    case 1:
        mensaje = "Lunes";
        break;
    case 2:
        mensaje = "Martes";
        break;
    case 3:
        mensaje = "Miércoles";
        break;
    case 4:
        mensaje = "Jueves";
        break;
    case 5:
        mensaje = "Viernes";
        break;
    case 6:
        mensaje = "Sábado";
        break;
    case 7:
        mensaje = "Domingo";
        break;
    default:
        mensaje = "Día inválido";
}

console.log( mensaje ); // Imprime: "Miércoles"

/** Casos que comparten bloques de ejecución */
diaDeLaSemana = 5;
let tipoDeDia;

switch (diaDeLaSemana) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    tipoDeDia = "Día laboral";
    break;
  case 6:
  case 7:
    tipoDeDia = "Fin de semana";
    break;
  default:
    tipoDeDia = "Día inválido";
}

console.log( tipoDeDia ); // Imprime: "Día laboral"

/** Casuistica implementada con strings */
const fruta = "manzana";
mensaje = '';

switch ( fruta ) {
    case "manzana":
        mensaje = "Es una manzana.";
        break;
    case "plátano":
        mensaje = "Es un plátano.";
        break;
    case "uva":
        mensaje = "Son uvas.";
        break;
    default:
        mensaje = "No conozco esa fruta.";
}

console.log( mensaje ); // Imprime: "Es una manzana."
