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

const numero = parseInt(readlineSync.question('Ingrese un número del 1 al 12 representando un mes: '));

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