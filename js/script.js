/* Esperar carga de documento para ejecutar función */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener("submit", validar);
});

/* Función de validación de formulario */
function validar(formulario) {
  formulario.preventDefault();
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var mail = document.getElementById("mail");
  var telefono = document.getElementById("telefono");
  var consulta = document.getElementById("textoconsulta");

  const regexp = /\d/;

  var regexpmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (nombre.value.length == 0) {
    alert("Tiene que escribir su nombre");
    nombre.focus();
    return;
  }
  if (regexp.test(nombre.value)) {
    alert("No ingresar números en nombre");
    nombre.focus();
    return;
  }
  if (apellido.value.length == 0) {
    alert("Tiene que escribir su apellido");
    apellido.focus();
    return;
  }
  if (regexp.test(apellido.value)) {
    alert("No ingresar números en apellido");
    apellido.focus();
    return;
  }

  if (mail.value.length == 0) {
    alert("Tiene que escribir su Email");
    mail.focus();
    return;
  }
  if (!regexpmail.test(mail.value)) {
    alert("Debe ingresar un email válido");
    mail.focus();
    return;
  }

  if (telefono.value.length == 0 || telefono.value.length < 6) {
    alert("Debe ingresar teléfono válido");
    telefono.focus();
    return;
  }

  if (consulta.value.length == 0) {
    alert("Debe ingresar una consulta");
    consulta.focus();
    return;
  } else if (consulta.value.length > 400) {
    alert("Su consulta debe contener menos de 400 caracteres");
    consulta.focus();
    return;
  }

  this.submit();
}
