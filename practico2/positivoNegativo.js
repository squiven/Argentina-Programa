// Solicite al usuario ingresar un número. Si el número es positivo, muestra
// por consola el mensaje: "El numero es positivo". Si el número es igual a
// cero, muestra por consola el mensaje: "El numero es cero". Si el número
// es negativo, muestra por consola el mensaje: "El numero es negativo".
// Guardar el programa en un archivo con nombre positivoNegativo.js


const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingrese un número: ');

if (numero > 0) {
  console.log('El número es positivo');
} else if (numero === 0) {
  console.log('El número es cero');
} else {
  console.log('El número es negativo');
}