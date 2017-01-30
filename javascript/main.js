$(document).ready(main);

function main(){


	//Oculto todo exepto el Login al inicio.
	$("#contenedor-operador").hide();
	$("#contenedor-consulta").hide();
	$("#nuevoPaquete").hide();
	$("#asignarPaquete").hide();
	$("#cargaEstados").hide();
	$("#reportes").hide();


	//Aqui todas las validaciones de formularios
	$("#txtUsuario").blur(validoUsuario);
	$("#txtContraseña").blur(validoContraseña);
	$("#txtNombreR").blur(validoNombreR);
	$("#txtApellidoR").blur(validoApellidoR);
	$("#txtCedulaR").blur(validoCedulaR);
	$("#txtNombreD").blur(validoNombreD);
	$("#txtApellidoD").blur(validoApellidoD);
	$("#txtCedulaD").blur(validoCedulaD);
	$("#txtDireccionD").blur(validoDireccionD);
	$("#txtPesoPaquete").blur(validoPesoPaquete);
	$("#txtAsignarCodigoP").blur(validoCodigoP);
	$("#txtAsignarRepartidor").blur(validoCodigoR);
	$("#txtCargaEstadosCodigoP").blur(validoCargaEstadosCodigoP);


	//Pongo los eventos a los botones
	$("#btnNuevoPaquete").click(muestroIngresoPaquete);
	$("#btnAsignarPaquete").click(muestroAsignarPaquete);
	$("#btnCargaEstados").click(muestroCargaEstados);
	$("#btnReportes").click(muestroReportes);

	$("#btnLogin").click(verificoUsuario); 
	$("#btnDesconectarse").click(desconectarse);
	$("#btnDesconectarse2").click(desconectarse);
	$("#btnIngresoPaquete").click(verificoIngresoPaquete);

	$("#btnAceptarAsignarPaquete").click(verificoAsignarPaquete);//Boton de asignar un paquete a repartidor

	$("#btnAceptarCargaEstados").click(verificoCargaEstados); //Boton de cargar estados a un paquete

	$("#btnAceptarSeguimientoPaquete").click(mostrarSeguimientoPaquete); //Boton del reporte de seguimiento a un paquete
	$("#btnAceptarEntregaRepartidor").click(mostrarEntregaRepartidor); //Boton de reporte del historial de paquetes de un repartidor

	$("#btnAceptarSeguimientoPaqueteConsulta").click(mostrarSeguimientoPaqueteConsulta); //Boton de reporte de seguimiento de un paquete del usuario consulta.





}

//Esta funcion es la que sucede cuando presionas el boton del login.
function verificoUsuario(){

	//Validamos que los datos de logeo esten bien.
	validoUsuarioContraseñaLogin();

	var usuario = $("#txtUsuario").val();
	var contraseña = $("#txtContraseña").val();
	var errorUsuario = $("#texto-error-usuario").html();// Guarda en la variable errorUsuario el valor que contenga el div texto-error-usuario (si lo hubiera, habria un error en el formulario)
	var errorContraseña = $("#texto-error-contraseña").html()// Guarda en la variable errorContraseña el valor que contenga el div texto-error-contraseña (si lo hubiera, habria un error en el formulario)
	var pos = 0;
	var encontre = false;

	//Si hay texto en cualquiera de estas dos variables, significa que hay un error en el formulario, por lo tanto no se ejecuta nada hasta que el usuario ingrese datos correctos.
	if(errorUsuario.length != 0 || errorContraseña.length != 0){

		

	}
	else{

		//Este while recorre el array usuarios 
		while(pos <= usuarios.length-1 && (!encontre)){

		var lista = usuarios[pos];
		//Verifica si el usuario ingresado por formulario se encuentra en el array 
		if(usuario == lista["cedula"]){
		
			encontre = true;
			//Si es asi, verifica que la contraseña sea la misma que la que esta asociada en el array-
			if(contraseña == lista["clave"]){

				//Si es asi, verifica que tipo de cuenta es, y le muestra una pantalla u otra dependiendo que tipo de usuario sea (Operador o consulta)
				if(lista["tipo"] == 1){

					//Oculto el login y muestro un mensaje de bienvenida y muestro el div de usuario operador
					$("#login").hide();
					$("#contenedor-operador").show();
					$("#bienvenida").show();
					$("#listadoPaquetesPendientes").html(muestroListadoPaquetesPendientes()); //Muestro el reporte del listado de paquetes pendientes a repartir que es el reporte que siempre se tiene que ver en pantalla
				}
				else if(lista["tipo"] == 2){

					//oculto el login y muestro el div de usuario consulta.
					$("#login").hide();
					$("#contenedor-consulta").show();
					$("#selectSeguimientoPaqueteConsulta").html(mostrarSelectSeguimientoPaqueteConsulta(usuario));//Cargo el select que se vera con los paquetes disponibles de seguimiento de ese usuario consulta en especifico
				}
				
			}
			// Si la contraseña es incorrecta aparece esto en pantalla
			else{
				$("#texto-error-login").html("Contraseña Incorrecta");
			}

		}
		else{
			pos++;
			//Si el usuario no coincide con ninguno registrado en el array, aparece esto en pantalla.
			$("#texto-error-login").html("Usuario no registrado");	
			}
	

	}
		

	}
}

//Esta funcion es la que sucede cuando presionas el boton aceptar de la creacion de paquetes
function verificoIngresoPaquete(){

	validoIngresoPaquete(); // Primero valido que todos los formularios esten correctos mediante esta funcion

	var nombreR = $("#txtNombreR").val();
	var nombreD = $("#txtNombreD").val();
	var apellidoR = $("#txtApellidoR").val();
	var apellidoD = $("#txtApellidoD").val();
	var cedulaR =  parseInt($("#txtCedulaR").val());
	var cedulaD = parseInt($("#txtCedulaD").val());
	var direccionD = $("#txtDireccionD").val();
	var pesoPaquete = parseInt($("#txtPesoPaquete").val());

	var errorNombreR = $("#errorNombreR").html();
	var errorNombreD = $("#errorNombreD").html();
	var errorApellidoR = $("#errorApellidoR").html();
	var errorApellidoD = $("#errorApellidoD").html();
	var errorCedulaR = $("#errorCedulaR").html();
	var errorCedulaD = $("#errorCedulaD").html();
	var errorDireccionD = $("#errorDireccionD").html();
	var errorPesoPaquete = $("#errorPesoPaquete").html();

	// Este if valida si en los divs correspondientes a los errores de cada uno tienen texto (Significa que hay un mensaje de error), si tienen, el programa no hace nada hasta que el usuario 
	// Arregle ese formulario. Si estan vacios significa que el usuario cumplio con todas las validaciones correspondientes y en el else se crea el paquete.
	if((errorNombreR.length != 0) || (errorNombreD.length != 0) || (errorApellidoR.length != 0) || (errorApellidoD.length != 0) || (errorCedulaR.length != 0) || (errorCedulaD.length != 0) || (errorDireccionD.length != 0) || (errorPesoPaquete.length != 0)){

		

	}
	else{
		//Creo un array temporal para guardar los datos
		var tmpPaquete = {};
		var hora = traigoHora();

			//Cargo los datos en el array temporal
			tmpPaquete["nombreR"] = nombreR;
			tmpPaquete["apellidoR"] = apellidoR;
			tmpPaquete["cedulaR"] = cedulaR;
			tmpPaquete["nombreD"] = nombreD;
			tmpPaquete["apellidoD"] = apellidoD;
			tmpPaquete["cedulaD"] = cedulaD;
			tmpPaquete["direccionD"] = direccionD;
			tmpPaquete["peso"] = pesoPaquete;
			tmpPaquete["codigo"] = codigoPaquete;//Le asigo al codigo, la variable Global codigoPaquete
			tmpPaquete["estado"] = "Recepcionado";
			tmpPaquete["hora1"] = hora;
			codigoPaquete++;//Aumento en 1 la variable global codigoPaquete

			//Cargo el array temporal en el array principal
			paquetes[paquetes.length] = tmpPaquete;


			//Vacio las cajas de texto del formulario
			$("#txtNombreR").val("");
			$("#txtNombreD").val("");
			$("#txtApellidoR").val("");
			$("#txtApellidoD").val("");
			$("#txtCedulaR").val("");
			$("#txtCedulaD").val("");
			$("#txtDireccionD").val("");
			$("#txtPesoPaquete").val("");

			//Notifico al usuario que su paquete fue guardado y el codigo de paquete
			alert("El paquete fue guardado correctamente, el codigo de este paquete es: ["+tmpPaquete["codigo"]+"] - Hora: "+hora+" - Y su estado actual es: '"+mostrarEstado(tmpPaquete["estado"])+"'.");

	}


}

//Esta funcion es la que sucede cuando se aprieta el boton aceptar de la asignacion de un paquete a repartidor
function verificoAsignarPaquete(){

	validoAsignarPaquete(); // Como sucedia en la funcion de carga de paquetes, primero valido todos los formularios

	var codigoPaquete = parseInt($("#txtAsignarCodigoP").val()); //Esta variable guarda el codigo del paquete ingresado en el formulario
	var codigoRepartidor = parseInt($("#txtAsignarRepartidor").val()); // Esta variable guarda el codigo del repartido ingresado en el formulario que se le asignara el paquete.
	var errorAsignarCodigoP = $("#errorAsignarCodigoP").html();
	var errorAsignarCodigoR = $("#errorAsignarCodigoR").html();
	var hora = traigoHora();
	var encontreR = false;// Variable booleana para detener el while cuando se halla encontrado al repartidor deseado en el array
	var encontreP = false;// Variable booleana para detener el while cuando se halla encontrado el paquete deseado en el array
	var posP = 0;
	var posR = 0;

	// Lo mismo que la funcion de arriba, verifico si hay mensajes de error, si hay el boton no hace nada, si no los hay pasa a la asignacion del paquete.
	if(errorAsignarCodigoP.length != 0 || errorAsignarCodigoR.length != 0){

		

	}
	else{

			while(posP<=paquetes.length-1 && (!encontreP)){//Primer while que reccore el array paquetes
			var tmpPaquetes = paquetes[posP]; 
			if(tmpPaquetes["estado"] == "Recepcionado"){ //Si el estado del paquete es igual a recepcionado
				if(codigoPaquete == tmpPaquetes["codigo"]){	//Si el codigo del paquete ingresado en el formulario es igual a el codigo de paquete del array.
					encontreP = true; // encontreP es igual a true para no se ejecute mas el while ya que encontre el paquete deseado.
					while(posR<=repartidores.length-1 && (!encontreR)){// Paso al egundo while que recorre el array de repartidores
					var tmpRepartidores = repartidores[posR];
					if(tmpRepartidores["disponible"] == "si"){//Verifico si el repartidor esta disponible
						if(codigoRepartidor == tmpRepartidores["codigoR"]){//Si el codigo del repartidor ingresado en el formulario es el mismo que el codigo de repartidor encontrado en el array de repartidores
							encontreR = true; // encontreR es igual a true, para detener el while de repartidor y no se vuelva a ejecutar ya q encontre el repartidor deseado
							if(tmpRepartidores["medio"] == traigoMedio(tmpPaquetes["peso"])){ //Si el medio del repartidor es el correcto para poder llevar ese paquete (que esto lo hago mediante una funcion que necesita el parametro de peso), se ejecuta los comandos para asignar un paquete
							//Cargo los datos necesarios.
							tmpRepartidores["disponible"] = "no"; //al repartidor con esto lo vuelvo que no esta disponible
							tmpPaquetes["repartidorAsignado"] = codigoRepartidor; //Al paquete le asigno el codigo de repartidor para asi saber que repartidor fue asignado a ese paquete posteriormente
							tmpPaquetes["estado"] = "Procesado";// Cambio el estado a Procesado
							tmpPaquetes["hora2"] = hora;//Le asigno la hora que fue cambiado a Procesado

							//Vacio las cajas de texto
							$("#txtAsignarCodigoP").val("");
							$("#txtAsignarRepartidor").val("");
							$("#errorResultadoAsignarPaquete").html("");
							$("#tablaPaquetes").html(listoPaquetes());
							$("#tablaRepartidores").html(listoRepartidoresDisponibles());

							alert("Paquete: ["+codigoPaquete+"] - Asignado correctamente a repartidor: ["+codigoRepartidor+"] "+traigoNombreRporCodigo(codigoRepartidor)+" - A la hora: "+hora+" - Y asignado el estado: '"+mostrarEstado("Recepcionado")+"'.");
						}
						else{
							//Si el medio del repartidor seleccionado no coincidiera con el medio necesitado por el peso del paquete, le muestra este mensaje de error.
							encontreR = true; //Se detiene el while de repartidores.
							$("#errorResultadoAsignarPaquete").html("El repartidor asignado no puede llevar esa carga, elija otro con un vehiculo mas apropiado. ["+traigoMedio(tmpPaquetes["peso"])+"]"); //Se muestra este mensaje y se le muestra al usuario que vehiculo (medio) es el necesario.
							$("#txtAsignarRepartidor").val("");

						}

						}
						else{
							//Si el codigo del repartidor no coincide con ninguno de los repartidores disponibles, muestro este mensaje de error.
							posR++;
							$("#errorResultadoAsignarPaquete").html("El codigo de repartidor ingresado no coincide con ninguno mostrado en pantalla");
							$("#txtAsignarRepartidor").val("");
						}

					}
					else{
							// Muestro si no hay repartidores disponibles
							posR++;
							$("#errorResultadoAsignarPaquete").html("No hay repartidores disponibles");
							$("#txtAsignarCodigoP").val("");
							$("#txtAsignarRepartidor").val("");
					}
				
				}

				}
				else{
					//Muestro si el codigo del paquete no coincide con ninguno
					posP++;
					$("#errorResultadoAsignarPaquete").html("El codigo de paquete no coincide con ninguno mostrado en pantalla");
					$("#txtAsignarCodigoP").val("");

				}



			}
			else{
				// Muestro si no hay paquetes disponibles con el estado "recepcionado"
				posP++;
				$("#errorResultadoAsignarPaquete").html("No hay paquetes para asignar.");
				$("#txtAsignarCodigoP").val("");
				$("#txtAsignarRepartidor").val("");
			}
		}
	}

}

// Esta funcion es la que sucede cuando se preciona el boton aceptar de la carga de estados a un paquete
function verificoCargaEstados(){

	validoCargaEstados(); //Como siempre verifico primero que nada los formularios

	var codigo = $("#txtCargaEstadosCodigoP").val(); //Guardo el codigo del paquete a asignar el estado en esta variable
	var estado = $("#selectCargaEstados").val(); //Guardo el valor del select en esta variable (guardo el valor del estado a asignar)
	var errorCodigo = $("#errorCargaEstadosCodigoP").html();
	var hora = traigoHora();
	var posP = 0;
	var encontreP = false;
	var posR = 0;
	var encontreR = false;
	if(errorCodigo.length != 0){

	}
	else{
		//Recorro el array paquetes con el while
		while(posP <= paquetes.length-1 && (!encontreP)){
			var tmpPaquetes = paquetes[posP];
			if(tmpPaquetes["estado"] == "Procesado" || tmpPaquetes["estado"] == "Viajando"){//Si el paquete esta en estado procesado o en estado viajando
				if(codigo == tmpPaquetes["codigo"]){ //Si el codigo ingresado en el formulario coincide con un paquete en estado procesado o en estado viajando
					encontreP = true; // Se encontro el paquete por lo tanto se detiene el while
					if(tmpPaquetes["estado"] == "Procesado"){//Si el paquete encontrado esta en estado Procesado
						if(estado == "Viajando"){ //Si el estado seleccionado en el formulario es "viajando"
							tmpPaquetes["estado"] = "Viajando"; //Se cambia el estado al paquete a viajando
							tmpPaquetes["hora3"] = hora;	//Se ingresa la hora al paquete que se le asigno el estado.
							//Se vacian las cajas de texto
							$("#txtCargaEstadosCodigoP").val("");
							$("#errorBtnCargaEstados").html("");

							$("#tablaPaquetesCargaEstados").html(listoPaquetesCargaEstados()); //Se renueva la lista de paquetes mostrados al usuario
							alert("Paquete: ["+codigo+"] - Asignado correctamente el estado '"+mostrarEstado(tmpPaquetes["estado"])+"' - A la hora: "+hora);
						}
						else if(estado == "Entregado"){//Si el estado seleccionado en el formulario es "entregado"
							//Se muestre un mensaje de error, ya que este paquete esta en estado "procesado" y debe serle asignado antes el estado viajando.
							$("#errorBtnCargaEstados").html("ERROR - Su paquete esta en estado '"+mostrarEstado(tmpPaquetes["estado"])+"' - antes de asignarle el estado 'Entregado', debe asignarle 'En Viaje'.");
						}

					}
					else if(tmpPaquetes["estado"] == "Viajando"){//Si el paquete encontrado esta en estado Viajando
						if(estado == "Entregado"){ //Si el estado seleccionado en el formulario es igual a entregado
							tmpPaquetes["estado"] = "Entregado"; //se le asigna el nuevo estado
							tmpPaquetes["hora4"] = hora; // se le asigna la hora de este nuevo estado
							tmpPaquetes["costo"] = calculoCosto(tmpPaquetes["peso"]); // se le asigna el costo del envio, que se calcula mediante una funcion que recibe el peso del paquete
							while(posR <= repartidores.length-1 && (!encontreR)){//creo un while para recorrer el array de repartidores
								var tmpRepartidor = repartidores[posR];
								if(tmpPaquetes["repartidorAsignado"] == tmpRepartidor["codigoR"]){ //si el codigo del repartidor asignado a ese paquete es igual al codigo de un repartidor (encontrado recorriendo el array repartidor mediante el while)
									encontreR = true;//se encontro al repartidor por lo tanto se detiene el while
									tmpRepartidor["disponible"] = "si"; //se cambia el estado del repartidor "disponible " a "si", por lo tanto este repartidor ya esta libre y puede llevar otro paquete
								}
								else{
									posR++;
								}
							}
							//vacio las cajas de texto
							$("#txtCargaEstadosCodigoP").val("");
							$("#errorBtnCargaEstados").html("");

							$("#tablaPaquetesCargaEstados").html(listoPaquetesCargaEstados());//se renueva la lista de paquetes mostrados al usuario
							$("#listadoPaquetesPendientes").html(muestroListadoPaquetesPendientes());// renuevo la lista de paquetes pendientes, que es uno de los reportes, el cual siempre esta activo en el lateral de la pagina, y en este momento es cuando se renueva.
							alert("Paquete: ["+codigo+"] - Asignado correctamente el estado '"+mostrarEstado(tmpPaquetes["estado"])+"' - A la hora: "+hora+" - Dejando libre a repartidor Nro: "+tmpPaquetes["repartidorAsignado"]+" - Y con un costo total de: $"+tmpPaquetes["costo"]);
						}
						else if(estado == "Viajando"){
							//Si el valor seleccionado en el formulario es el estado viajando, le muestra este mensaje de error ya que el paquete ya se encuentra en ese estado
							$("#errorBtnCargaEstados").html("ERROR - Su paquete ya se encuentra en estado '"+mostrarEstado(tmpPaquetes["estado"])+"' - ahora debe asignarle el estado "+mostrarEstado("Entregado")+".");
						}

					}

				}
				else{
					//Si el codigo de paquete no coincide con ninguno que cumple las condiciones
					posP++;
					$("#errorBtnCargaEstados").html("El codigo del paquete no coincide con ninguno mostrado en pantalla");
					$("#txtCargaEstadosCodigoP").val("");
				}

			}
			else{
				//si no hay paquetes que cumplan las condiciones
				posP++;
				$("#errorBtnCargaEstados").html("No hay paquetes para asignar");
				$("#txtCargaEstadosCodigoP").val("");
			}

		}

	}

}

//Esta funcion sucede cuando se hace click en el boton de Carga de nuevos paquetes del html
function muestroIngresoPaquete(){

	//Muestro el div  de nuevo paquete y oculto los otros
	$("#nuevoPaquete").show();
	$("#asignarPaquete").hide();
	$("#cargaEstados").hide();
	$("#reportes").hide();
	$("#bienvenida").hide();

	//Vacio las cajas de texto de errores de todos
	$("#errorNombreR").html("");
	$("#errorApellidoR").html("");
	$("#errorCedulaR").html("");
	$("#errorNombreD").html("");
	$("#errorApellidoD").html("");
	$("#errorCedulaD").html("");
	$("#errorDireccioD").html("");
	$("#errorPesoPaquete").html("");
	$("#resultadoIngresoPaquete").html("");

	$("#errorAsignarCodigoP").html("");
	$("#errorAsignarCodigoR").html("");
	$("#errorResultadoAsignarPaquete").html("");

	$("#errorCargaEstadosCodigoP").html("");
	$("#errorBtnCargaEstados").html("");

	$("#listoSeguimientoPaquete").html("");
	$("#selectSeguimientoPaquete").html("");//Borro el select del reporte de seguimiento a un paquete (ya que este se carga cada vez mediante una funcion al hacer click al boton html de reportes)
	$("#selectEntregaRepartidor").html(""); //Borro el select de reporte del historial de entregas de repartidor (ya que este se carga cada vez mediante una funcion al hacer click en el boton html de reportes)


}
//Esta funcion sucede cuando se hace click en el boton de asignar paquetes a un repartidor del html
function muestroAsignarPaquete(){

	//Oculto todos los divs menos el de asignar paquete
	$("#nuevoPaquete").hide();
	$("#asignarPaquete").show();
	$("#cargaEstados").hide();
	$("#reportes").hide();
	$("#bienvenida").hide();
	$("#tablaPaquetes").html(listoPaquetes());//Muestro los paquetes disponibles para asignar a un repartidor (estado recepcionado)
	$("#tablaRepartidores").html(listoRepartidoresDisponibles()); //Muestro los repartidores disponibles para llevar un paquete (disponible = si)

	//Vacio las cajas de texto de error de todos
	$("#errorNombreR").html("");
	$("#errorApellidoR").html("");
	$("#errorCedulaR").html("");
	$("#errorNombreD").html("");
	$("#errorApellidoD").html("");
	$("#errorCedulaD").html("");
	$("#errorDireccioD").html("");
	$("#errorPesoPaquete").html("");
	$("#resultadoIngresoPaquete").html("");

	$("#errorAsignarCodigoP").html("");
	$("#errorAsignarCodigoR").html("");
	$("#errorResultadoAsignarPaquete").html("");

	$("#errorCargaEstadosCodigoP").html("");
	$("#errorBtnCargaEstados").html("");

	$("#listoSeguimientoPaquete").html("");
	$("#selectSeguimientoPaquete").html("");//Borro el select del reporte de seguimiento a un paquete (ya que este se carga cada vez mediante una funcion al hacer click al boton html de reportes)
	$("#selectEntregaRepartidor").html("");//Borro el select de reporte del historial de entregas de repartidor (ya que este se carga cada vez mediante una funcion al hacer click en el boton html de reportes)

}
//Esta funcion sucede cuando se hace click en el boton de carga de estados de un paquete del html
function muestroCargaEstados(){

	// oculto todos los divs y muestro el de carga de estados
	$("#nuevoPaquete").hide();
	$("#asignarPaquete").hide();
	$("#cargaEstados").show();
	$("#reportes").hide();
	$("#bienvenida").hide();

	$("#selectSeguimientoPaquete").html(""); // vacio el selec de seguimiento a un paquete
	$("#tablaPaquetesCargaEstados").html(listoPaquetesCargaEstados()); //muestro los paquetes disponibles para cargar los estados (estado entregado al repartidor)

	//vacio las cajas de texto de error de todos
	$("#errorNombreR").html("");
	$("#errorApellidoR").html("");
	$("#errorCedulaR").html("");
	$("#errorNombreD").html("");
	$("#errorApellidoD").html("");
	$("#errorCedulaD").html("");
	$("#errorDireccioD").html("");
	$("#errorPesoPaquete").html("");
	$("#resultadoIngresoPaquete").html("");

	$("#errorAsignarCodigoP").html("");
	$("#errorAsignarCodigoR").html("");
	$("#errorResultadoAsignarPaquete").html("");

	$("#errorCargaEstadosCodigoP").html("");
	$("#errorBtnCargaEstados").html("");

	$("#listoSeguimientoPaquete").html("");
	$("#selectSeguimientoPaquete").html("");//Borro el select del reporte de seguimiento a un paquete (ya que este se carga cada vez mediante una funcion al hacer click al boton html de reportes)
	$("#selectEntregaRepartidor").html("");//Borro el select de reporte del historial de entregas de repartidor (ya que este se carga cada vez mediante una funcion al hacer click en el boton html de reportes)


}
//Esta funcion sucede cuando se hace click en el boton de reportes del html
function muestroReportes(){

	//Oculto todos los divs y muestro el de reportes
	$("#nuevoPaquete").hide();
	$("#asignarPaquete").hide();
	$("#cargaEstados").hide();
	$("#reportes").show();
	$("#bienvenida").hide();

	$("#selectSeguimientoPaquete").html("");//boro el select de seguimiento a un paquete
	$("#selectEntregaRepartidor").html("");//borro el select de historial de entrega repartidor
	$("#seguimientoPaquete").html(muestroSelectSeguimientoPaquete()); //Relleno el select seguimiento de un paquete (que se encuentra dentro del div seguimientoPaquete), mediante esta funcion
	$("#reporteEntregaRepartidor").html(muestroSelectEntregaRepartidor()); //Relleno el select del historial de entregas de repartidor (que se encuentra dentro del div reporteEntregaRepartidor), mediante esta funcion

	//Vacio las cajas de texto de errores de todos
	$("#errorNombreR").html("");
	$("#errorApellidoR").html("");
	$("#errorCedulaR").html("");
	$("#errorNombreD").html("");
	$("#errorApellidoD").html("");
	$("#errorCedulaD").html("");
	$("#errorDireccioD").html("");
	$("#errorPesoPaquete").html("");
	$("#resultadoIngresoPaquete").html("");

	$("#errorAsignarCodigoP").html("");
	$("#errorAsignarCodigoR").html("");
	$("#errorResultadoAsignarPaquete").html("");

	$("#errorCargaEstadosCodigoP").html("");
	$("#errorBtnCargaEstados").html("");

	$("#listoSeguimientoPaquete").html("");
	$("#listoEntregaRepartidor").html("");





}

//Esta funcion es la que se dispara al dar click en el boton html de desconectarse
function desconectarse(){

	//Oculto todos los divs principales y muestro solamente el login.
	$("#login").show();
	$("#contenedor-operador").hide();
	$("#contenedor-consulta").hide();
	$("#txtUsuario").val("");
	$("#txtContraseña").val("");
	$("#texto-error-login").html("");
	$("#texto-error-usuario").html("");
	$("#texto-error-contraseña").html("");

	$("#listoSeguimientoPaqueteConsulta").html("");
	$("#selectSeguimientoPaqueteConsulta").html("");
	
}

