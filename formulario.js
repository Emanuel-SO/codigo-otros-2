//se trae el form por class
var formulario = document.querySelector(".formulario");

//segun el submit del formulario se ejecuta la funcion
formulario.onsubmit = function(e) {

  //hace que no se refresque la página a pesar de ser submit
  e.preventDefault();
  
  //se obtienen los inputs del formulario y se guardan en variables
  var n = formulario.elements[0]
  var ed = formulario.elements[1]
  var na = formulario.elements[2]

  //se asignan los valores de los inputs a varibles
  var nombre = n.value
  var edad = ed.value
  var i = na.selectedIndex
  var nacionalidad = na.options[i].value

  // console.log(nombre, edad)
  // console.log(nacionalidad)
//si el nombre no cumple con la condicion se agrega una clase al elemeto HTML
  if (nombre.length === 0) {
    n.classList.add("error")
  }
//si la edad no cumple con la condicion se agrega una clase al elemeto HTML
  if (edad < 18 || edad > 120) {
    ed.classList.add("error")
  }
//si se cumplen las condiciones se ejecuta la funcion que agrega a los invitados -> se le pasan las varibles a la funcion
if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

// agrega un break al HTML
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);

//funcion que recibe como parametros los valores del formulario para agregar nuevos invitados
function agregarInvitado(nombre, edad, nacionalidad) {
  //grupo de condicionales que cambian los valores del input nacionalidad a una cadena de caracteres
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  //se seleciona un elemento de HTML donde se agregaran los invitados
  var lista = document.getElementById("lista-de-invitados")

  //se crea un elemento HTML que alamcenera la informacion de los invitados
  var elementoLista = document.createElement("div")
  //se le agrega una clase para que reciba estilos CSS
  elementoLista.classList.add("elemento-lista")
  //se agrega bajo el elemento selecionado de HTML
  lista.appendChild(elementoLista)


  //funcion para crear las cards de los invitados
  function crearElemento(descripcion, valor) {
    //se crean los elementos que contendran a los invitados
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("span")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.innerHTML= valor; 
    //se agregan las secciones de informacion de invitados bajo el elemento HTML selecionado
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

  //Boton que permite borrar a un invitado
  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    botonBorrar.parentNode.remove()
  }
}