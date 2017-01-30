/* Aqui estan todos los arrays y funciones correspondientes a ellos */


//Array de usuarios (con los usuarios precargados)
var usuarios = [{"cedula":11111111, "clave":"pass001", "tipo":1},
				{"cedula":22222222, "clave":"pass002", "tipo":1},
				{"cedula":33333333, "clave":"pass003", "tipo":2},
				{"cedula":44444444, "clave":"pass004", "tipo":2},
				{"cedula":55555555, "clave":"pass005", "tipo":2},
				{"cedula":66666666, "clave":"pass006", "tipo":2}
				];

//Array de paquetes (con paquetes precargados)
var paquetes = [{"nombreR":"Juan","apellidoR":"Acosta","cedulaR":33333333,"nombreD":"Roberto","apellidoD":"Lopez","cedulaD":36457421,"direccionD":"Millan 2935","peso":55,"codigo":1001,"estado":"Entregado","repartidorAsignado":1,"hora1":"15:03","hora2":"15:10","hora3":"15:10","hora4":"15:55","costo":27500},
				{"nombreR":"Alvaro","apellidoR":"Amarra","cedulaR":34567812,"nombreD":"Evangelina","apellidoD":"Gutierrez","cedulaD":44444444,"direccionD":"8 de Octubre 1701","peso":21,"codigo":1002,"estado":"Entregado","repartidorAsignado":2,"hora1":"15:13","hora2":"15:20","hora3":"15:25","hora4":"16:01","costo":4200},
				{"nombreR":"Yanina","apellidoR":"Lozart","cedulaR":55555555,"nombreD":"Ximena","apellidoD":"Rodriguez","cedulaD":45678123,"direccionD":"Bilabio 840","peso":3,"codigo":1003,"estado":"Entregado","repartidorAsignado":6,"hora1":"15:17","hora2":"15:30","hora3":"15:33","hora4":"16:05","costo":300},
				{"nombreR":"Nicolas","apellidoR":"Sogliano","cedulaR":54237662,"nombreD":"Griselda","apellidoD":"Peron","cedulaD":36589764,"direccionD":"Agraciada 3004","peso":8,"codigo":1004,"estado":"Viajando","repartidorAsignado":5,"hora1":"15:28","hora2":"15:40","hora3":"15:51"},
				{"nombreR":"Franco","apellidoR":"Aguirre","cedulaR":24564722,"nombreD":"Victoria","apellidoD":"Messi","cedulaD":36769865,"direccionD":"19 de Abril 850, apartamento 3","peso":32,"codigo":1005,"estado":"Viajando","repartidorAsignado":1,"hora1":"15:35","hora2":"15:50","hora3":"16:01"},
				{"nombreR":"Diego","apellidoR":"Fernandez","cedulaR":32645795,"nombreD":"German","apellidoD":"Ronaldo","cedulaD":55555555,"direccionD":"18 de Julio 1920","peso":234,"codigo":1006,"estado":"Viajando","repartidorAsignado":7,"hora1":"15:40","hora2":"16:00","hora3":"16:07"},
				{"nombreR":"Milagros","apellidoR":"Rodriguez","cedulaR":58764651,"nombreD":"Francisco","apellidoD":"Garmendia","cedulaD":47655124,"direccionD":"Fernandez Crespo 35","peso":12,"codigo":1007,"estado":"Procesado","repartidorAsignado":4,"hora1":"15:46","hora2":"15:55"},
				{"nombreR":"Sofia","apellidoR":"Gonzalez","cedulaR":47686371,"nombreD":"Juan Ignacio","apellidoD":"Perez","cedulaD":55555555,"direccionD":"Bv. Artigas 2030","peso":48,"codigo":1008,"estado":"Procesado","repartidorAsignado":2,"hora1":"15:58","hora2":"16:08"},
				{"nombreR":"Felipe","apellidoR":"Lopez","cedulaR":35748554,"nombreD":"Camilo","apellidoD":"Castillo","cedulaD":35764522,"direccionD":"Pierrot 820","peso":325,"codigo":1009,"estado":"Procesado","repartidorAsignado":8,"hora1":"16:03","hora2":"16:18"},
				{"nombreR":"Natalia","apellidoR":"Fernandez","cedulaR":47844353,"nombreD":"Diego","apellidoD":"Rodriguez","cedulaD":53423472,"direccionD":"Armando Aguirre 245, apartamento 305","peso":45,"codigo":1010,"estado":"Recepcionado","hora1":"16:09"},
				{"nombreR":"Facundo","apellidoR":"Panissa","cedulaR":55555555,"nombreD":"Oscar","apellidoD":"Lopriz","cedulaD":46895625,"direccionD":"Arboleda Chica 1515","peso":60,"codigo":1011,"estado":"Recepcionado","hora1":"16:15"},
				{"nombreR":"Nahuel","apellidoR":"Sosa","cedulaR":23434125,"nombreD":"Juan","apellidoD":"Vasigno","cedulaD":33232763,"direccionD":"Brasil 820","peso":71,"codigo":1012,"estado":"Recepcionado","hora1":"16:20"}
				];

//Array de repartidores
var repartidores = [{"codigoR":1,"nombre":"Juan Perez","medio":"Moto","disponible":"no"}, //El valor "disponible", es cuando el repartidor esta llevando un paquete o cuando no. Al estar el valor en "no", significa que el repartidor esta ocupado.
				{"codigoR":2,"nombre":"Ana Gomez","medio":"Moto","disponible":"no"},
				{"codigoR":3,"nombre":"Lumila Frances","medio":"Moto","disponible":"si"},
				{"codigoR":4,"nombre":"Martin Gonzalez","medio":"Bicicleta","disponible":"no"},
				{"codigoR":5,"nombre":"Carlos Martinez","medio":"Bicicleta","disponible":"no"},
				{"codigoR":6,"nombre":"Nicolas Gervaz","medio":"Bicicleta","disponible":"si"},
				{"codigoR":7,"nombre":"Roberto Rodriguez","medio":"Camioneta","disponible":"no"},
				{"codigoR":8,"nombre":"Genaro Loprete","medio":"Camioneta","disponible":"no"},
				{"codigoR":9,"nombre":"Octavio Piña","medio":"Camioneta","disponible":"si"}
				];
//Array de limites de paquetes
var limitesPaquetes = {"Bicicleta":{"desde":0,"hasta":20,"costo":100},
						"Moto":{"desde":21,"hasta":50,"costo":200},
						"Camioneta":{"desde":51,"hasta":1000,"costo":500}};				

var codigoPaquete = 1013; //Variable global "codigoPaquete", esta variable es la utilizada para el codigo de los nuevos paquetes ingresados. (la cual se aumenta cada vez q se ingresa un nuevo paquete)



//Esta funcion retorna una tabla de los paquetes en estado "recepcionado". (es utilizada para mostrarse en la pestaña de asignar un paquete a repartidor)
function listoPaquetes(){

	var pos;
	var retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Cedula Remitente</td><td>Nombre</td><td>Cedula Destinatario</td><td>Nombre</td><td>Direccion del Destinatario</td><td>Peso del paquete</td></tr>";
	for(pos=0;pos<=paquetes.length-1;pos++){
		var tmpPaquetes = paquetes[pos];
		if(tmpPaquetes["estado"] == "Recepcionado"){//verifico que sean paquetes en estado recepcionado
		retorno = retorno + "<tr>";
		retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
		retorno = retorno + "<td>" + tmpPaquetes["cedulaR"] + "</td>";	
		retorno = retorno + "<td>" + tmpPaquetes["nombreR"] + " "+ tmpPaquetes["apellidoR"] + "</td>";	
		retorno = retorno + "<td>" + tmpPaquetes["cedulaD"] + "</td>";	
		retorno = retorno + "<td>" + tmpPaquetes["nombreD"] + " "+ tmpPaquetes["apellidoD"] + "</td>";		
		retorno = retorno + "<td>" + tmpPaquetes["direccionD"] + "</td>";	
		retorno = retorno + "<td>" + tmpPaquetes["peso"] + "</td>";	
		retorno = retorno + "</tr>";
		}
	}
	
	retorno = retorno + "</table><br><br>";
	return retorno;

}

//Esta funcion retorna una tabla de los paquetes en estado "procesado" o "viajando". (Es utilizada para mostrarse en la pestaña de carga de estados a un paquete)
function listoPaquetesCargaEstados(){

	var pos;
	var retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Estado</td><td>Codigo Repartidor Asignado</td><td>Nombre Repartidor</td></tr>";
	for(pos=0;pos<=paquetes.length-1;pos++){
		var tmpPaquetes = paquetes[pos];
		if(tmpPaquetes["estado"] == "Procesado" || tmpPaquetes["estado"] == "Viajando"){//verifico que los paquetes esten en estado "procesado" o "recepcionado"

		retorno = retorno + "<tr>";
		retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
		retorno = retorno + "<td>" + mostrarEstado(tmpPaquetes["estado"]) + "</td>";//Muestro el estado "formal" del paquete ("En viaje" o "Entregado al repartidor")			
		retorno = retorno + "<td>" + tmpPaquetes["repartidorAsignado"] + "</td>";	
		retorno = retorno + "<td>" + traigoNombreRporCodigo(tmpPaquetes["repartidorAsignado"]) + "</td>";	//Muestro el nombre del repartidor asignado a ese paquete 
		retorno = retorno + "</tr>";
		}
	}
	
	retorno = retorno + "</table><br><br>";
	return retorno;


}

//Esta funcion retorna una tabla con los repartidores disponibles (disponible = si), es utilizada en la pestaña de asignar paquete a repartidor
function listoRepartidoresDisponibles(){

	var pos;
	var retorno = "<br><table border='1'><tr><td>Codigo Repartidor</td><td>Nombre</td><td>Vehículo</td></tr>";
	for(pos=0;pos<=repartidores.length-1;pos++){
		var tmpRepartidores = repartidores[pos];
		if(tmpRepartidores["disponible"] == "si"){ //Verifico que el repartidor este disponible
		retorno = retorno + "<tr>";
		retorno = retorno + "<td>" + tmpRepartidores["codigoR"] + "</td>";		
		retorno = retorno + "<td>" + tmpRepartidores["nombre"] + "</td>";		
		retorno = retorno + "<td>" + tmpRepartidores["medio"] + "</td>";			
		retorno = retorno + "</tr>";
		}
	}
	
	retorno = retorno + "</table><br>";
	return retorno;




}
//Esta funcion hace que en el select del reporte seguimiento de paquete en la pestaña reportes muestre todos los paquetes que existen (para que luego el usuario seleccione uno y muestre el historial de estados de ese paquete)
function muestroSelectSeguimientoPaquete(){
	
	var pos;
	for(pos=0;pos<=paquetes.length-1;pos++){
		var tmpPaquetes = paquetes[pos];
		$("#selectSeguimientoPaquete").append("<option value='"+tmpPaquetes["codigo"]+"'>"+tmpPaquetes["codigo"]+"</option>");
	}

}
//Esta funcion hace que el select del reporte del historial de entregas de repartidor en la pestaña reportes, muestre todos los repartidores existentes (para luego ver su historial de paquetes entregados)
function muestroSelectEntregaRepartidor(){

	var pos;
	for(pos=0;pos<=repartidores.length-1;pos++){
		var tmpRepartidor = repartidores[pos];
		$("#selectEntregaRepartidor").append("<option value='"+tmpRepartidor["codigoR"]+"'>"+tmpRepartidor["codigoR"]+"</option>");
	}
}
/*
Esta funcion muestra una tabla del historial de entregas del repartidor seleccionado del selectEntregaRepartidor, esta funcion se dispara al presionar el boton correspondiente.
IMPORTANTE - Hago una aclaracion de esta funcion. El cometido de esta es mostrar todos los paquetes que entrego el repartidor ordenado por hora desendentemente...
La funcion funciona y los muestra desendentemente, pero exepto la informacion de los Array precargados, que quiere decir esto: Me ordena perfectamente todos los paquetes ingresados y pasado a estado "entregado" mientras se esta ejecutando el programa
Menos la de los arrays precargados. No encontre el porque de esto, busque soluciones para que me los tomara pero no lo logre. 
La funcion cumple con su cometido, ya que si el programa se fuera a utilizar de verdad importaria los paquetes ingresados mientras se ejecuta, ya que no tendria paquetes precargados.
Sugiero pasar 3 paquetes que no esten en estado "entregado" y sean del mismo repartidor, a justamente el estado "entregado", con diferencia de 1 minuto cada uno, y asi se podra apreciar como ordena correctamente.
*/
function mostrarEntregaRepartidor(){

	var codigoR = $("#selectEntregaRepartidor").val(); //Guardo el codigo del repartidor del select en la variable codigoR
	var posP;
	var encontre = false;
	paquetes.sort(ordenoHora);//Ordeno el array paquetes llamando a la funcion ordenoHora
	paquetes.reverse();//Lo doy vuelta porque quiero mostrarlo desendentemente
	var retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Hora de entrega</td><td>Costo</td></tr>";
	for(posP = 0; posP <= paquetes.length-1; posP++){
		
		var tmpPaquete = paquetes[posP];
		if(codigoR == tmpPaquete["repartidorAsignado"] && tmpPaquete["estado"] == "Entregado"){//Si el codigo ingresado mediante el select es el mismo que el paquete tiene asignado como codigo repartidor y el paquete esta en estado entregado
			encontre = true;//Esto significa que encontre al menos 1 paquete que cumplia las condiciones
					retorno = retorno + "<tr>";
					retorno = retorno + "<td>" + tmpPaquete["codigo"] + "</td>";		
					retorno = retorno + "<td>" + tmpPaquete["hora4"] + "</td>";			
					retorno = retorno + "<td> $" + tmpPaquete["costo"] + "</td>";			
					retorno = retorno + "</tr>";
					
			
		}

	}

	retorno = retorno + "</table><br><br>";

	if(!encontre){//si no encontre ningun paquete que cumplia con las condiciones, muestro este mensaje:
		retorno = "El repartidor seleccionado todavia no entrego ningun pedido.";
	}

	$("#listoEntregaRepartidor").html(retorno);//muestro la tabla
	paquetes.reverse();//Doy vuelta nuevamente el array luego de mostrarlo, ya que esta funcion se ejecuta cuando se da click en un boton, por lo tanto si dejaba el otro .reverse solamente cada vez q se daba click al boton se cambiaria y se veria diferente la tabla.
}


//Esta funcion devuelve una tabla con los paquetes en los estados "procesado" y "viajando", es utilizada para el reporte de paquetes pendientes de entrega, que esta en un lateral del html y siempre tiene q ser visible
function muestroListadoPaquetesPendientes(){


	var pos;
	var contador = 0;
	var retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Cedula Remitente</td><td>Cedula Destinatario</td><td>Estado del paquete</td></tr>";
	for(pos=0;pos<=paquetes.length-1;pos++){
		var tmpPaquetes = paquetes[pos];
		if(tmpPaquetes["estado"] == "Procesado" || tmpPaquetes["estado"] == "Viajando"){
			contador++;//Contador para luego listar cuantos paquetes cumplieron con esta condicion
		retorno = retorno + "<tr>";
		retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
		retorno = retorno + "<td>" + tmpPaquetes["cedulaR"] + "</td>";		
		retorno = retorno + "<td>" + tmpPaquetes["cedulaD"] + "</td>";		
		retorno = retorno + "<td>" + mostrarEstado(tmpPaquetes["estado"]) + "</td>";	//Muestro el estado "formal" ("Entregado al repartidor" o "En viaje")
		retorno = retorno + "</tr>";
		}
	}
	
	retorno = retorno + "</table><br><br>En total hay "+contador+" paquetes pendientes de entrega.";
	return retorno;






}

//Esta funcion muestra una tabla que contiene todos los estados del paquete y a que hora adquirio cada uno. Es utilizada en el reporte de seguimiento de paquete.
function mostrarSeguimientoPaquete(){

	var paquete = $("#selectSeguimientoPaquete").val();//Guardo el codigo del paquete del select ingresado por el usuario
	var posP = 0;
	var encontreP = false;
	var retorno = "";
	while(posP<=paquetes.length-1 && (!encontreP)){
		var tmpPaquetes = paquetes[posP];
		if(paquete == tmpPaquetes["codigo"] && tmpPaquetes["estado"] == "Entregado"){//si el paquete esta en estado entregado muestra esto
			encontreP = true;
			retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Recepcionado por la empresa</td><td>Entregado al repartidor</td><td>En viaje</td><td>Entregado</td><td>Costo Final</td></tr>";
			retorno = retorno + "<tr>";
			retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora1"] + "</td>";			
			retorno = retorno + "<td>" + tmpPaquetes["hora2"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora3"] + "</td>";	
			retorno = retorno + "<td>" + tmpPaquetes["hora4"] + "</td>";	
			retorno = retorno + "<td> $" + tmpPaquetes["costo"] + "</td>";		
			retorno = retorno + "</tr>";

		}
		else if(paquete == tmpPaquetes["codigo"] && tmpPaquetes["estado"] == "Viajando"){//si el paquete esta en estado viajando muestra esto (no tendra hora4):
			encontreP = true;
			retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Recepcionado por la empresa</td><td>Entregado al repartidor</td><td>En viaje</td><td>Entregado</td></tr>";
			retorno = retorno + "<tr>";
			retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora1"] + "</td>";			
			retorno = retorno + "<td>" + tmpPaquetes["hora2"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora3"] + "</td>";	
			retorno = retorno + "<td>No realizado</td>";			
			retorno = retorno + "</tr>";
		}
		else if(paquete == tmpPaquetes["codigo"] && tmpPaquetes["estado"] == "Procesado"){//si el paquete esta en estado procesado (no tendra hora4 ni hora3):
			encontreP = true;
			retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Recepcionado por la empresa</td><td>Entregado al repartidor</td><td>En viaje</td><td>Entregado</td></tr>";
			retorno = retorno + "<tr>";
			retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora1"] + "</td>";			
			retorno = retorno + "<td>" + tmpPaquetes["hora2"] + "</td>";		
			retorno = retorno + "<td>No realizado</td>";	
			retorno = retorno + "<td>No realizado</td>";			
			retorno = retorno + "</tr>";
		}
		else if(paquete == tmpPaquetes["codigo"] && tmpPaquetes["estado"] == "Recepcionado"){//si el paquete esta en estado recepcionado (no tendra hora4, hora3, ni hora2):
			encontreP = true;
			retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Recepcionado por la empresa</td><td>Entregado al repartidor</td><td>En viaje</td><td>Entregado</td></tr>";
			retorno = retorno + "<tr>";
			retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora1"] + "</td>";			
			retorno = retorno + "<td>No realizado</td>";		
			retorno = retorno + "<td>No realizado</td>";	
			retorno = retorno + "<td>No realizado</td>";			
			retorno = retorno + "</tr>";
		}
		else{
			posP++;
		}
	}
	
	retorno = retorno + "</table><br><br>";

	$("#listoSeguimientoPaquete").html(retorno);//Muestro la tabla

}


//Esta funcion es exactamente igual al de "mostrarSeguimientoPaquete()" - muestra una tabla que contiene todos los estados del paquete y a que hora adquirio cada uno. Es utilizada en el reporte de seguimiento de paquete para el usuario consulta.
function mostrarSeguimientoPaqueteConsulta(){

	var paquete = $("#selectSeguimientoPaqueteConsulta").val();
	var posP = 0;
	var encontreP = false;
	var retorno = "";
	while(posP<=paquetes.length-1 && (!encontreP)){
		var tmpPaquetes = paquetes[posP];
		if(paquete == tmpPaquetes["codigo"] && tmpPaquetes["estado"] == "Entregado"){
			encontreP = true;
			retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Recepcionado por la empresa</td><td>Entregado al repartidor</td><td>En viaje</td><td>Entregado</td><td>Costo Final</td></tr>";
			retorno = retorno + "<tr>";
			retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora1"] + "</td>";			
			retorno = retorno + "<td>" + tmpPaquetes["hora2"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora3"] + "</td>";	
			retorno = retorno + "<td>" + tmpPaquetes["hora4"] + "</td>";	
			retorno = retorno + "<td> $" + tmpPaquetes["costo"] + "</td>";		
			retorno = retorno + "</tr>";

		}
		else if(paquete == tmpPaquetes["codigo"] && tmpPaquetes["estado"] == "Viajando"){
			encontreP = true;
			retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Recepcionado por la empresa</td><td>Entregado al repartidor</td><td>En viaje</td><td>Entregado</td></tr>";
			retorno = retorno + "<tr>";
			retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora1"] + "</td>";			
			retorno = retorno + "<td>" + tmpPaquetes["hora2"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora3"] + "</td>";	
			retorno = retorno + "<td>No realizado</td>";			
			retorno = retorno + "</tr>";
		}
		else if(paquete == tmpPaquetes["codigo"] && tmpPaquetes["estado"] == "Procesado"){
			encontreP = true;
			retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Recepcionado por la empresa</td><td>Entregado al repartidor</td><td>En viaje</td><td>Entregado</td></tr>";
			retorno = retorno + "<tr>";
			retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora1"] + "</td>";			
			retorno = retorno + "<td>" + tmpPaquetes["hora2"] + "</td>";		
			retorno = retorno + "<td>No realizado</td>";	
			retorno = retorno + "<td>No realizado</td>";			
			retorno = retorno + "</tr>";
		}
		else if(paquete == tmpPaquetes["codigo"] && tmpPaquetes["estado"] == "Recepcionado"){
			encontreP = true;
			retorno = "<br><table border='1'><tr><td>Codigo Paquete</td><td>Recepcionado por la empresa</td><td>Entregado al repartidor</td><td>En viaje</td><td>Entregado</td></tr>";
			retorno = retorno + "<tr>";
			retorno = retorno + "<td>" + tmpPaquetes["codigo"] + "</td>";		
			retorno = retorno + "<td>" + tmpPaquetes["hora1"] + "</td>";			
			retorno = retorno + "<td>No realizado</td>";		
			retorno = retorno + "<td>No realizado</td>";	
			retorno = retorno + "<td>No realizado</td>";			
			retorno = retorno + "</tr>";
		}
		else{
			posP++;
		}
	}
	
	retorno = retorno + "</table><br><br>";

	$("#listoSeguimientoPaqueteConsulta").html(retorno);

}
//Esta funcion la utilizo para saber la hora del sistema y la devuelvo en formato "HH:MM"
function traigoHora(){
	var fecha = new Date();
	var minutos = fecha.getMinutes();
	var hora = fecha.getHours();
	if(minutos.length == 1){
		minutos = "0" + minutos;
	}
	if(hora.length == 1){
		hora = "0" + hora;
	}
	var hora;
	horaTotal = hora + ":" + minutos;
	return horaTotal;
}

//Esta funcion pide como parametro "usuario" que este sera el numero de cedula usado cuando se logea al programa como un usuario tipo 2.
//Esta funcion carga en el select de seguimiento de paquete que esta en el div de usuario-consulta, todos los paquetes disponibles para ese usaurio en especifico
function mostrarSelectSeguimientoPaqueteConsulta(usuario){
	
	var posP;
	var encontre = false;
	for(posP = 0; posP<=paquetes.length-1; posP++){
		var tmpPaquetes = paquetes[posP];
		if(usuario == tmpPaquetes["cedulaR"] || usuario == tmpPaquetes["cedulaD"]){//si la cedula del usuario logeado coincide con la cedula remitente o destinataria de algun paquete se muestra en el select el codigo de ese paquete
			$("#selectSeguimientoPaqueteConsulta").append("<option value='"+tmpPaquetes["codigo"]+"'>"+tmpPaquetes["codigo"]+"</option>");
			encontre = true;//Esto significa q si se encontre un paquete que cumplia las condiciones
		}		
	}
	if (!encontre){//Si no encontre ningun paquete
			$("#selectSeguimientoPaqueteConsulta").html("<option value='no'>No tiene paquetes para ver.</option>");
		}

}
// Esta funcion la utilizo para traer el nombre del vehiculo que se necesita para el peso deseado (Siendo peso el parametro solicitado).
function traigoMedio(peso){

	var retorno;
		for(vehiculo in limitesPaquetes){
			dato = limitesPaquetes[vehiculo];
			if(peso >= dato["desde"] && peso <= dato["hasta"]){
				retorno = vehiculo;
			}
		}
		return retorno;


}
//Funcion que retorna el nombre del repartidor del código ingresado como parámetro. (El código debe ser y es obviamente, un código de un repartidor)
function traigoNombreRporCodigo(codigo){

	var pos;
	var retorno = "";
	for(pos=0; pos <= repartidores.length-1;pos++){
		var repartidor = repartidores[pos];

		for(nombre in repartidor){

			if(codigo == repartidor["codigoR"]){
				retorno = repartidor["nombre"];
			}
		}

	}

	return retorno;
}

// Esta funcion es para mostrar el nombre completo de un estado al usuario. (Nombre formal)
function mostrarEstado(estado){

	var retorno = "";

	if(estado == "Recepcionado"){

		retorno = "Recepcionado por la Empresa";
	}
	else if(estado == "Procesado"){

		retorno = "Entregado al repartidor";
	}
	else if(estado == "Viajando"){

		retorno = "En viaje"
	}
	else if(estado == "Entregado"){

		retorno = "Entregado al Destinatario";
	}

	return retorno;
}

//Esta funcion la utilizo para saber el costo total del paquete mediante el peso (siendo peso el parametro pedido)
function calculoCosto(peso){

	var retorno;
		for(vehiculo in limitesPaquetes){
			dato = limitesPaquetes[vehiculo];
			if(peso >= dato["desde"] && peso <= dato["hasta"]){
				retorno = peso*dato["costo"];
			}
		}
		return retorno;

}

//Esta funcion es para ordenar la hora en el array paquetes (esta funcion la llamo en el .sort de la funcion "mostrarEntregaRepartidor()")
function ordenoHora(p1, p2){
	var retorno = 0;

	if(p1["hora4"]>p2["hora4"]){
		retorno = 1;
	}
	else if(p1["hora4"]<p2["hora4"]){
		retorno = -1;
	}

	return retorno;


}