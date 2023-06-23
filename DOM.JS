//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
let button = document.createElement("button");
button.innerText = " Haz Click";
document.body.appendChild(button);

//Cambiar el contenido de un elemento HTML mediante JavaScript.
document.getElementById("SOY UN BOTON");

//Ocultar y mostrar elementos HTML utilizando JavaScript.

function ocultar() {
  document.getElementById("SOY UN BOTON");
  style.display = "none";
}

function mostrar() {
  document.getElementById("SOY UN BOTON");
  style.display = "block";
}

// Crear un array de 10 nombres.//

const salad = [
  "tomate",
  "lechuga",
  "aceitunas",
  "atun",
  "cebolla",
  "papa",
  "guisantes",
  "mayonesa",
  "vinagre",
  "aceite",
];

//Crear una función que imprima en pantalla una lista con los nombres del array de nombres.//

function ListaNombres(salad) {
  console.log(salad);
  document.getElementById(salad);
}
// Crear un array de números.//

const numeros = [2, 34, 656, 666, 555];

const imprimir = document.createElement("p");
imprimir.innerText = numeros.length;
document.body.appendChild(imprimir);

// Crear una función que pinte en pantalla cuántos números tiene el array de números.//
// Crear una función que pinte en pantalla cuántos números tiene el array de números
// Crea los nodos necesarios para imprimir un formulario.
document.createElement("form")