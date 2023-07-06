// EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
// código para su correcta utilización.

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

const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

console.log('La computadora eligió: ' + jugadaComputadora);
console.log('El usuario eligió: ' + jugadaUsuario);
console.log('El resultado fue: ' + resultado);
