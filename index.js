
var datosGlobales;

//#region Inicializar
$(document).ready(function () {

  var input = document.getElementById("sRuc");
  input.addEventListener("keyup", function (event) {

    if (event.key == 'Enter') {
      event.preventDefault();
      fnBuscarInfo();
    }
  });

});
//#endregion

//#region Cambiar Numero de Documento
function fnBuscarInfo() {

  var sDocumento = document.getElementById('sRuc').value;
  if (sDocumento != "") {


    var formData = new FormData();
    formData.append("token", "2UNujeomioME3I3m9fM7mmngxA9AhJBI0mBVzCf7h4yOq0uCFlZg2L500jvT");
    formData.append("ruc", sDocumento);
    var request = new XMLHttpRequest();



    request.open("POST", "https://api.migo.pe/api/v1/ruc");


    request.setRequestHeader("Accept", "application/json");
    request.send(formData);
    request.onload = function () {
      //respuesta en texto 
      console.log('MIGO API')
      console.log(this.response)

      var data = JSON.parse(this.response);

      console.log(data);

      datosGlobales = data;

      datosJSON = JSON.stringify(datosGlobales)

      llenarDatos(datosGlobales)

    };

  }

}
//#endregion


//#region Llenar Inputs
function llenarDatos(datosGlobales) {

  if (datosGlobales.success == true) {
    $('#txtEstado').val(datosGlobales.estado_del_contribuyente);
    $('#txtRazonSocial').val(datosGlobales.nombre_o_razon_social);
    $('#txtDepartamento').val(datosGlobales.departamento);
    $('#txtDistrito').val(datosGlobales.distrito);
    $('#txtDireccion').val(datosGlobales.direccion_simple);
  }
  else {
    $('#txtEstado').val("");
    $('#txtRazonSocial').val("");
    $('#txtDepartamento').val("");
    $('#txtDistrito').val("");
    $('#txtDireccion').val("");

  }

}
//#endregion

//Ejemplo 

/*ruc: "20603274742"
departamento: "AREQUIPA"
direccion_simple: "PJ. AREQUIPA NRO. 209 P.J. MI PERU"
distrito: "JOSÉ LUIS BUSTAMANTE Y RIVERO"
estado_del_contribuyente: "ACTIVO"
nombre_o_razon_social: "MIGO SOCIEDAD ANONIMA CERRADA - MIGO S.A.C."
provincia: "AREQUIPA"
success: true */
