let entrada = window.prompt ("Ingrese su nombre");
let datos = entrada.split(" ");

let nombre = document.getElementById("nombre");
let apellido =document.getElementById("apellido");
let dni = document.getElementById("dni")

nombre.innerHTML = datos[0];
apellido.innerHTML =datos[1];


