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