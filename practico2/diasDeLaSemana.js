// Escriba un programa que solicite al usuario ingresar un número del 1 al 7
// representando un día de la semana. Guardar el programa en un archivo
// diasDeLaSemana.js. La semana comienza el lunes y termina el domingo.
// - Si el número es 1, muestra por consola el mensaje: "Hoy es lunes".
// - Si el número es 2, muestra por consola el mensaje: "Hoy es martes".
// - Si el número es 3, muestra por consola el mensaje: "Hoy es miércoles".
// - Y así sucesivamente …
// - Para cualquier otro número, muestra por consola el mensaje: "Número
// inválido".
// NOTA: utilizar la sentencia switch-case.


const readlineSync = require('readline-sync');

const numero = parseInt(readlineSync.question('Ingrese un numero del 1 al 7 representando un dia de la semana: '));

let mensaje;

switch (numero) {
  case 1:
    mensaje = 'Hoy es lunes';
    break;
  case 2:
    mensaje = 'Hoy es martes';
    break;
  case 3:
    mensaje = 'Hoy es miércoles';
    break;
  case 4:
    mensaje = 'Hoy es jueves';
    break;
  case 5:
    mensaje = 'Hoy es viernes';
    break;
  case 6:
    mensaje = 'Hoy es sábado';
    break;
  case 7:
    mensaje = 'Hoy es domingo';
    break;
  default:
    mensaje = 'Número inválido';
    break;
}

console.log(mensaje);