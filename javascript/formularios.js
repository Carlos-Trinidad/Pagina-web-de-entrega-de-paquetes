/* Aqui se encuentra todas las funciones que conllevan a la validacion de formularios */


//hago todas las validaciones correspondientes al usuario (login) cuando este deja la caja de texto.
function validoUsuario(){
	var form = $(this).val();

	$("#texto-error-usuario").html(validoCedulaCorrecta(form));//valido q sea una cedula correcta


}
//hago todas las validaciones correspondientes a la contraseña (login) cuando este deja la caja de texto.
function validoContraseña(){

	var form = $(this).val();
	
	$("#texto-error-contraseña").html(validoVacio(form));//valido q no este vacio

}
//Hago las validaciones generales del login cuando el usuario presiona el boton aceptar (Login)
function validoUsuarioContraseñaLogin(){

	var usuario = $("#txtUsuario").val();
	var contraseña = $("#txtContraseña").val();

	$("#texto-error-usuario").html(validoCedulaCorrecta(usuario));
	$("#texto-error-contraseña").html(validoVacio(contraseña));

}
//Hago las validaciones generales cuando el usuario presiona el boton aceptar de la pestaña de alta de paquete
function validoIngresoPaquete(){

	var nombreR = $("#txtNombreR").val();
	var nombreD = $("#txtNombreD").val();
	var apellidoR = $("#txtApellidoR").val();
	var apellidoD = $("#txtApellidoD").val();
	var cedulaR =  $("#txtCedulaR").val();
	var cedulaD = $("#txtCedulaD").val();
	var direccionD = $("#txtDireccionD").val();
	var pesoPaquete = $("#txtPesoPaquete").val();

	$("#errorNombreR").html(validoVacio(nombreR));// valido que el dato no este vacio
	$("#errorNombreD").html(validoVacio(nombreD));// valido que el dato no este vacio
	$("#errorApellidoR").html(validoVacio(apellidoR));// valido vacio
	$("#errorApellidoD").html(validoVacio(apellidoD)); //valido vacio
	$("#errorCedulaD").html(validoCedulaCorrecta(cedulaD)); //valido q la cedula sea correcta
	$("#errorCedulaR").html(validoCedulaCorrecta(cedulaR)); //valido cedula
		
	
	$("#errorDireccionD").html(validoVacio(direccionD)); //valido vacio

	$("#errorPesoPaquete").html(validoVacio(pesoPaquete)); //valido vacio
	if(!verificoNumero(pesoPaquete)){// valido que el peso del paquete sea numerico
		$("#errorPesoPaquete").html("Ingrese un valor numerico en Kg");
	}
	else if(pesoPaquete == 0 || pesoPaquete < 0){//valido que el peso no sea 0 ni menor a 0
		$("#errorPesoPaquete").html("");
		$("#errorPesoPaquete").html("El peso no puede ser menor o igual a 0");
	}

}
//Hago las validaciones generales de la pestaña asignar paquete
function validoAsignarPaquete(){

	var codigoR = $("#txtAsignarCodigoP").val();
	var codigoP = $("#txtAsignarRepartidor").val();

	$("#errorAsignarCodigoR").html(validoVacio(codigoR));
	$("#errorAsignarCodigoP").html(validoVacio(codigoP));

	if(!verificoNumero(codigoR)){
		$("#errorAsignarCodigoP").html("Ingrese un codigo numerico");
	}


	if(!verificoNumero(codigoP)){
		$("#errorAsignarCodigoR").html("Ingrese un codigo numerico");
	}


}
// Hago las validaciones generales de la pestaña de carga estados
function validoCargaEstados(){

	var codigo = $("#txtCargaEstadosCodigoP").val();



	$("#errorCargaEstadosCodigoP").html(validoVacio(codigo));
	
	if(!verificoNumero(codigo)){
		$("#errorCargaEstadosCodigoP").html("Ingrese un codigo numerico");
	}
}
//Valido especificamente el nombre remitente
function validoNombreR(){

	var nombre = $(this).val();

	$("#errorNombreR").html(validoVacio(nombre));


}
//valido especificamente el apellido remitente
function validoApellidoR(){

	var apellido = $(this).val();

	$("#errorApellidoR").html(validoVacio(apellido));

}
//valido especificamente la cedula remitente
function validoCedulaR(){

	var cedula = $(this).val();

	$("#errorCedulaR").html(validoCedulaCorrecta(cedula));

}
//valido especificamente nombre destinatario
function validoNombreD(){

	var nombre = $(this).val();

	$("#errorNombreD").html(validoVacio(nombre));

}
//valido especificamente el apellido destinatario
function validoApellidoD(){

	var apellido = $(this).val();

	$("#errorApellidoD").html(validoVacio(apellido));

}
//valido especificamente la cedula destinatario
function validoCedulaD(){

	var cedula = $(this).val();

	$("#errorCedulaD").html(validoCedulaCorrecta(cedula));

}
// valido especificamente la direccion destinatario
function validoDireccionD(){

	var direccion = $(this).val();

	$("#errorDireccionD").html(validoVacio(direccion));

}
//valido especificamente el peso del paquete
function validoPesoPaquete(){

	var peso = $(this).val();

	$("#errorPesoPaquete").html(validoVacio(peso));
	var numerico = verificoNumero(peso);

	if(!numerico){
		$("#errorPesoPaquete").html("Ingrese un valor numerico en Kg");
	}
	else if(peso == 0 || peso < 0){
		$("#errorPesoPaquete").html("El peso no puede ser menor o igual a 0");
	}

}
// valido especificamente el codigo del paquete (en la pestaña de asignar paquete a repartidor)
function validoCodigoP(){

	var codigo = $(this).val();

	$("#errorAsignarCodigoP").html(validoVacio(codigo));//valido vacio
	var numerico = verificoNumero(codigo);

	if(!numerico){//valido q sea numerico
		$("#errorAsignarCodigoP").html("Ingrese un codigo numerico");
	}

}
// valido especificamente el codigo del repartidor (en la pestaña de asignar paquete a repartidor)
function validoCodigoR(){

	var codigo = $(this).val();

	$("#errorAsignarCodigoR").html(validoVacio(codigo));//valido vacio
	var numerico = verificoNumero(codigo);

	if(!numerico){//valido q sea numerico
		$("#errorAsignarCodigoR").html("Ingrese un codigo numerico");
	}


}
//valido especificamente el codigo del paquete (En la pestaña de carga de estados a un paquete)
function validoCargaEstadosCodigoP(){

	var codigo = $(this).val();

	$("#errorCargaEstadosCodigoP").html(validoVacio(codigo));//valido vacio
	var numerico = verificoNumero(codigo);

	if(!numerico){//valido q sea numerico
		$("#errorCargaEstadosCodigoP").html("Ingrese un codigo numerico");
	}

}

//funcion que devuelve que lo ingresado sea una cedula correcta (pido como parametro el formulario)
function validoCedulaCorrecta(formulario){

	var cedula = formulario;
	var respuesta = "";

	if(verificoDatoVacio(cedula)){  //verifico que no sea un dato vacio
		
		respuesta = "Rellene el campo solicitado";
	}
	else if(!verificoNumero(cedula)){//verifico que sea numero

		respuesta = "Ingrese una cedula correcta (Formato: 12345678)";
	}
	else if(cedula.length != 8){//verifico que la cedula tenga 8 digitos

  		respuesta = "Ingrese una cedula correcta con sus 8 digitos";
	}
	else{

		respuesta = "";
	}


	return respuesta;
}

//funcion que devuelve si  el dato es vacio o no
function validoVacio(formulario){
	var texto = formulario;
	var respuesta = "";

	if(verificoDatoVacio(texto)){//verifico que el dato no este vacio
		
		respuesta = "Rellene el campo solicitado";
	}
	else{
		respuesta = "";
	}

	return respuesta;

}
//Funcion que verifica que el dato mandado no sea vacio, devuelve true si esta vacio y false si no lo esta.
function verificoDatoVacio(dato){
	var retorno = false;
	if(dato="" || dato.length==0){
		retorno = true;
	}
	return retorno;
}

//Funcion que verifica que el dato sea numerico.
function verificoNumero(dato){
	return !isNaN(dato);
}
