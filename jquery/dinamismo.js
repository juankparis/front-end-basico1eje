$(document).on ("ready", inicio);
function inicio ()
{
	$("#personalizar").on("click",transicion);
	$("#especificaciones").on("click",hechoen);
	$("#contactar").on("click",contactos);
}
function transicion()
{
	var cambioscss =
	{
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: "0%"
	};
	var cambiospersonalizacion =
	{
		height:"auto",
		opacity:1,
		width:"40%"
	};
	$("#historia").css(cambioscss);
	$("#personalizacion").css(cambiospersonalizacion);
	$("#color div").on("click", cambiarColor);
}
function cambiarColor(datos)
{
	//con console.log(datos); se busca en la consola en currenttarget se depliega y se busca id="nombre del id"
	//despues esta es forma de verificar que si estan llagando los datos en forma de ventana 
	//var col = datos.currentTarget.id;
	//alert(col);
	//mirar en google el currentTarget.id
	//console.log(datos);
	var col = datos.currentTarget.id;
	var colorcarro = "img/c" + col + ".jpg" 
	$("#carro").attr("src", colorcarro);
}
function hechoen()
{
	alert("hecho en colombia");
}
function contactos()
{
	alert("creado por: JUAN CARLOS ALFONSO CRUZ");
}