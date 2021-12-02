
var datosGlobales;

//#region Inicializar
$(document).ready(function () {


  //$("#sRuc").on('change', onChangeDocument);

});
//#endregion

//#region Cambiar Numero de Documento
function onChangeDocument() {
  if ($(this).val() != 0) {

 	var sDocumento = document.getElementById('sRuc').value;
  if (sDocumento!= "") {


    var formData = new FormData();
    formData.append("token", "2UNujeomioME3I3m9fM7mmngxA9AhJBI0mBVzCf7h4yOq0uCFlZg2L500jvT");
    formData.append("ruc", sDocumento);
    var request = new XMLHttpRequest();



    request.open("POST", "https://api.migo.pe/api/v1/ruc");


    request.setRequestHeader("Accept", "application/json");
    request.send(formData);
    request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);

      datosGlobales = data;

      llenarDatos(JSON.stringify(datosGlobales))
      //$('#dataJSON').val(JSON.stringify(datosGlobales));

    };



  }




}
//#endregion

function llenarDatos(datosGlobales) {
  let contenido = '';
  let datoVacio = '';
  let html_tbody = '';
  let ContadorFila = 0;

  contenido = $('#divContent');
  contenido.empty();

  html_tbody = "<p>";

  html_tbody = datosGlobales;

  html_tbody += "</p>";

  contenido.append(html_tbody);


}
