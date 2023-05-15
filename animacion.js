const boton = document.getElementById('miBoton');
const mensajeContainer = document.getElementById('mensaje-container');
const volverBtn = document.getElementById('volver');

boton.addEventListener('click', function() {
  mensajeContainer.style.display = 'flex';
});

const volverBoton = document.getElementById('volver');
volverBoton.addEventListener('click', function() {
  mensajeContainer.style.display = 'none';
});

var btnMostrarVentanaEmergente = document.getElementById("miBoton2");
var btnCerrarVentanaEmergente = document.getElementById("cerrarVentanaEmergente");
var divVentanaEmergente = document.getElementById("ventanaEmergente");

btnMostrarVentanaEmergente.addEventListener("click", function(){
  divVentanaEmergente.style.display = "block";
});

btnCerrarVentanaEmergente.addEventListener("click", function(){
  divVentanaEmergente.style.display = "none";
});
