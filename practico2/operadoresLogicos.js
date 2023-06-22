const readlineSync = require('readline-sync');

const numero = parseInt(readlineSync.question('Ingrese un número entero: '));

if (numero > 0 && numero % 2 === 0) {
  console.log('El número es positivo y par');
} else if (numero > 0 && numero % 2 !== 0) {
  console.log('El número es positivo e impar');
} else if (numero < 0) {
  console.log('El número es negativo');
} else if (numero === 0) {
  console.log('El número es cero');
}