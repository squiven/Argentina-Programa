// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
// juego, es decir:
// ● Una jugada: gana el ganador de esa única jugada.
// ● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
// el usuario gane una jugada y la computadora la otra.
// ● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.

const readlineSync = require('readline-sync');

const JUGADA_PIEDRA = 'piedra';
const JUGADA_PAPEL = 'papel';
const JUGADA_TIJERAS = 'tijeras';

function obtenerJugadaComputadora() {
  const opciones = [JUGADA_PIEDRA, JUGADA_PAPEL, JUGADA_TIJERAS];
  const indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

function obtenerJugadaUsuario() {
  while (true) {
    const jugadaUsuario = readlineSync.question('Ingresa tu jugada (piedra, papel o tijeras): ');
    if (jugadaUsuario === JUGADA_PIEDRA || jugadaUsuario === JUGADA_PAPEL || jugadaUsuario === JUGADA_TIJERAS) {
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
    (jugadaComputadora === JUGADA_PIEDRA && jugadaUsuario === JUGADA_TIJERAS) ||
    (jugadaComputadora === JUGADA_PAPEL && jugadaUsuario === JUGADA_PIEDRA) ||
    (jugadaComputadora === JUGADA_TIJERAS && jugadaUsuario === JUGADA_PAPEL)
  ) {
    return 'Gana la computadora';
  } else {
    return 'Gana el usuario';
  }
}

function jugarPartida(cantidadJugadas) {
  let contadorUsuario = 0;
  let contadorComputadora = 0;

  for (let i = 0; i < cantidadJugadas; i++) {
    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = obtenerJugadaUsuario();
    const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    console.log('La computadora eligió: ' + jugadaComputadora);
    console.log('El usuario eligió: ' + jugadaUsuario);
    console.log('El resultado fue: ' + resultado);

    if (resultado === 'Gana el usuario') {
      contadorUsuario++;
    } else if (resultado === 'Gana la computadora') {
      contadorComputadora++;
    }
  }

  if (contadorUsuario > contadorComputadora) {
    console.log('El usuario ganó la partida!');
  } else if (contadorUsuario < contadorComputadora) {
    console.log('La computadora ganó la partida!');
  } else {
    console.log('La partida terminó en empate!');
  }
}

let cantidadJugadas = readlineSync.questionInt('En cuantas jugadas quieres terminar el juego? (1, 2 o mejor de 3): ');

if (cantidadJugadas === 1 || cantidadJugadas === 2 || cantidadJugadas === 3) {
  jugarPartida(cantidadJugadas);
} else {
  console.log('La cantidad de jugadas ingresada no es válida. Debes elegir 1, 2 o 3.');
}
