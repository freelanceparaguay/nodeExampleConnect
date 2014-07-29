/* 
 * Junio 2014 http://otroblogdetecnologias.blogspot.com
 *
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

### Tools
Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   
Nodeclipse is free open-source project that grows with your contributions.
