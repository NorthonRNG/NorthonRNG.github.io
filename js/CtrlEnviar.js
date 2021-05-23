"use strict";

var forma = document.getElementById("forma"),
    txtBoleta = forma ["boleta"],
    txtNombre = forma ["nombre"],
    txtGrupo = forma ["grupo"],
    txtMateria = forma ["materia"],
    txtFecha = forma ["fecha"],
    enviar = document.getElementById("enviar");
function procesa(){
    var b = forma["boleta"].value.trim(),
        n = forma["nombre"].value.trim(),
        g = forma["grupo"].value.trim(),
        m = forma["materia"].value.trim(),
    fechaValueAsDate = txtFecha.valueAsDate,
    fecha = new Date(txtFecha.value),
    miFecha;
  enviar.textContent = "Número de Boleta: "+ b + "| Nombre del Alumno: "+ n + "| Grupo: "+ g +"| Materia: "+m;
 
  salidaFecha.textContent = txtFecha.type + " | " + txtFecha.value + " | "
  + (fechaValueAsDate ? "|La Fecha: "+ fechaValueAsDate : fecha) ;
  miFecha = (fecha.getDate()+1) + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
  salidaFecha1.textContent = miFecha; 
}
