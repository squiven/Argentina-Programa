// Escriba un programa que solicite al usuario ingresar un número entero del 1 al
// 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
// marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
// vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
// el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
// consistirá de imprimir por consola la cantidad de días que tiene el mes
// ingresado bajo el siguiente formato:
// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
// Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
// de dias del mes de enero es 31”.
// NOTAS:
// ● Nota que el valor de [mes] no es el numero ingresado si no su
// correspondiente almacenado en la estructura de datos elegida.
// ● Para el alcance de este ejercicio, podemos pensar que febrero siempre
// tiene 28 días.


const readlineSync = require('readline-sync');

const meses = {
  1: 'enero',
  2: 'febrero',
  3: 'marzo',
  4: 'abril',
  5: 'mayo',
  6: 'junio',
  7: 'julio',
  8: 'agosto',
  9: 'septiembre',
  10: 'octubre',
  11: 'noviembre',
  12: 'diciembre'
};

const numero = parseInt(readlineSync.question('Ingrese un numero del 1 al 12 representando un mes: '));

if (numero >= 1 && numero <= 12) {
  let cantidadDeDias;

  if (numero === 2) {
    cantidadDeDias = 28;
  } else if (numero === 4 || numero === 6 || numero === 9 || numero === 11) {
    cantidadDeDias = 30;
  } else {
    cantidadDeDias = 31;
  }

  console.log(`La cantidad de días del mes de ${meses[numero]} es ${cantidadDeDias}`);
} else {
  console.log('Número de mes inválido. Debe ser un número del 1 al 12.');
}