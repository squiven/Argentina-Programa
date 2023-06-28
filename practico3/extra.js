// EXTRA: Después de completar con éxito las tareas anteriores, te quedarán dos
// listas de nombres, los admitidos y los rechazados pero estarán desordenados. El
// desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los
// nombres de manera ordenada alfabéticamente. Deberás agregar la palabra
// “ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos
// deberás imprimir: “La lista ordenada de invitados admitidos es:”


let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let admitidos = [];
let rechazados = [];

for (let i = 0; i < personas.length; i++) {
  if (personas[i] === "Jose" || personas[i] === "Sofia") {
    rechazados.push(personas[i]);
  } else {
    admitidos.push(personas[i]);
  }
}

admitidos.sort();
rechazados.sort();

console.log("La lista de invitados admitidos es:");
for (let i = 0; i < admitidos.length; i++) {
  console.log(admitidos[i]);
}

console.log("La lista de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i]);
}