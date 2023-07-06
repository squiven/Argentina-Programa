// Pasos a seguir:
// 1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.
// 2. Crea una función llamada obtenerJugadaComputadora que generará un número
// aleatorio entre 0 y 2 para representar las opciones:
// - 0 para "piedra",
// - 1 para "papel" y
// - 2 para "tijeras"
// Siempre utilizando los valores de strings y no los valores númericos.

// Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre los valores
// numércios y los strings “piedra”, “papel” y “tijeras.
// Ayuda2: revisar en el teórico cuál es la función de la librería Math que genera un número
// random.
// 3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
// elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
// Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
// valor por consola.
// 4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
// de la computadora y del usuario. Implementa las reglas del juego para determinar el
// ganador y retorna el resultado.
// 5. Llama a las funciones en el orden adecuado para ejecutar el juego:
// a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
// variable.
// b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
// c) Invoca la función determinarGanador pasando como argumentos las jugadas de
// la computadora y del usuario. Almacena el resultado en una variable.

// 6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
// debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
// (quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
// resultado:
// La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario].
// El resultado fue: [Empate | Gana la computadora | Gana el usuario].
// NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
// tres párrafos.

const readlineSync = require('readline-sync');

function obtenerJugadaComputadora() {
  const opciones = ['piedra', 'papel', 'tijeras'];
  const indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

function obtenerJugadaUsuario() {
  while (true) {
    const jugadaUsuario = readlineSync.question('Ingresa tu jugada (piedra, papel o tijeras): ');
    if (jugadaUsuario === 'piedra' || jugadaUsuario === 'papel' || jugadaUsuario === 'tijeras') {
      return jugadaUsuario;
    } else {
      console.log('La selección no es correcta. Por favor, elige entre piedra, papel o tijeras.');
    }
  }
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return 'Empate';
  } else if (
    (jugadaComputadora === 'piedra' && jugadaUsuario === 'tijeras') ||
    (jugadaComputadora === 'papel' && jugadaUsuario === 'piedra') ||
    (jugadaComputadora === 'tijeras' && jugadaUsuario === 'papel')
  ) {
    return 'Gana la computadora';
  } else {
    return 'Gana el usuario';
  }
}

const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

console.log('La computadora eligió: ' + jugadaComputadora);
console.log('El usuario eligió: ' + jugadaUsuario);
console.log('El resultado fue: ' + resultado);

