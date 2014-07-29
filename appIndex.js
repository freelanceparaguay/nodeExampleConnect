/* 
 * Junio 2014 http://otroblogdetecnologias.blogspot.com
 * Ofrece el ruteo basico e implementacion de respuesta utilizando Connect().
 * Actualmente, el framework Express.js cuenta con muchas caracteristicas implementadas
 * que mejoran el desarrollo de apps.
 * Es una demo simple, a esto le faltan muchas cosas para llegar a ser un sistema
 * 
 * Para ser una app MVC (Modelo Vista Controlador) le faltan los items:
 * * Dibujado en pantalla del HTML. Este contiene el HTML en bruto mezclado con el codigo node.js, 
 * 		las repuestas se escriben directo al objeto request.
 * * Al no estar separado el HTML, cuesta utilizar disenos responsive, que al final es lo que mas atrae en 
 * 		los sistemas web.
 * * Separacion de los modulos en archivos y directorios. No cuenta con una estructura para proyectos grandes.
 * * Autenticacion.
 * * Uso de una BD.
 * * No se manejan sesiones.
 * 
 * Este ejemplo base, puede ser utilizado como pruebas de APIS o cosas simples, que no requieran 
 * el dibujado de HTML.
 * * 
 * */

var connect=require('connect');
var app=connect();


//define here your module, link it with routes
app.use(logger);
app.use('/blog',blogModule);
app.use('/',beginModule);

//port 3000
app.listen(3000);


//process the request
function logger(req, res,next){
	console.log('%s %s',req.method,req.url);
	next();
}//logger(req, res,next){

function beginModule(req,res){	
	var htmlToDraw="<!DOCTYPE html>"+
	"<html>"+
	"	<head>"+
	"		<meta charset=\"utf-8\" />"+
	"		<title></title>"+
	"   </head>"+
	"<body>"+
	"	<h1>Inicio, Node.js utilizando Connect()</h1>"+
	"	<p>Puede utilizar las siguiente rutas en su navegador:</p><br>"+
	"	<ul>"+
	"		<li>/</li>"+
	"		<li>/blog</li>"+
	"	</ul>"+
	"	<p>"+
	"	/*"+ 
	" 	* Junio 2014 http://otroblogdetecnologias.blogspot.com <br>"+
	"	 * Ofrece el ruteo basico e implementacion de respuesta utilizando Connect().<br>"+
	"	 * Actualmente, el framework Express.js cuenta con muchas caracteristicas implementadas <br>"+
	"	 * que mejoran el desarrollo de apps.<br>"+
	"	 <br>"+
	"	 * Es una demo simple, a esto le faltan muchas cosas para llegar a ser un sistema<br>"+
	"	 * <br>"+
	"	 * Para ser una app MVC (Modelo Vista Controlador) le faltan los items:<br>"+
	"	 * * Dibujado en pantalla del HTML. Este contiene el HTML en bruto mezclado con el codigo node.js,<br>"+ 
	"	 * 		las repuestas se escriben directo al objeto request.<br>"+
	"	 * * Al no estar separado el HTML, cuesta utilizar disenos responsive, que al final es lo que mas atrae en<br>"+ 
	"	 * 		los sistemas web.<br>"+
	"	 * * Separacion de los modulos en archivos y directorios. No cuenta con una estructura para proyectos grandes.<br>"+
	"	 * * Autenticacion de usuarios.<br>"+
	"	 * * Uso de una BD.<br>"+
	"	 * * No se manejan sesiones.<br>"+
	"	 * <br>"+
	"	 * Este ejemplo base, puede ser utilizado como pruebas de APIS o cosas simples, que no requieran el dibujado de HTML.<br>"+
	"	 * * <br>"+
	"	 * */<br>"+
	"	</p>"+
	"	<a href=\"http://otroblogdetecnologias.blogspot.com\">Visitar http://otroblogdetecnologias.blogspot.com</a>"+
	"</body>"+
	"</html>";	
//escritura del HTML
	res.writeHead(200,{"Content-Type": "text/html"});
	res.write(htmlToDraw);
	res.end();	
}//beginModule(req,res){


function blogModule(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.write("Respuesta como TEXTO \{\"Content-Type\" \: \"text\/plain\"\}");
	res.end();	
}//blogModule(req,res)


