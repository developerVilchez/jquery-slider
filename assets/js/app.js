var rutaLocal = "assets/img/"
var arrImagenes = [{url:"1.jpg"},
				   {url:"2.jpg"},
				   {url:"3.jpg"},
				   {url:"4.jpg"},
				   {url:"5.jpg"},
				   {url:"6.jpg"},
				   {url:"7.jpg"}];
var index = 0;

//Instanciamos las variables de jQuery
var	$img = $("img");
var $btnNext = $("#next");
var $btnBack =$("#back");
var $divControl = $(".controles");

//Inicializamos con la primera imagen
$img.attr("src",rutaLocal+arrImagenes[0].url);

//Creamos botones para cada imagen del array
for(var i in arrImagenes){
	$divControl.append("<button class='control'/>");
	}

//Creo la variable jquery del boton
var $buttonControl = $("button");

var $arrButton = jQuery.makeArray($buttonControl);
	console.log(jQuery.isArray($arrButton));

//Al momento de dar click en el boton de control cambia la imagen
jQuery.each($arrButton, function( i, val ) {
 		$buttonControl.eq(i).on("click",function(){
 			mostrarImagen(i);
 		})
});	


//Asociamos el evento al click del boton next
$btnNext.on("click",function(e){
	e.preventDefault();
	index++;
	index = (index>=arrImagenes.length)? 0 : index;
	mostrarImagen(index);
})


//Asociamos el evento click del boton back
$btnBack.on("click",function(e){
	e.preventDefault();
	index--;
	index = (index<0)?arrImagenes.length-1 : index;
	mostrarImagen(index);
})

//Definimos la función que muestra la imagen
function mostrarImagen(index){
	$img.attr("src",rutaLocal+arrImagenes[index].url);
}


function autoplay() {
	interval = setInterval(function(){
		index++;
		index = (index>=arrImagenes.length)? 0 : index;
		mostrarImagen(index);
	},5000);
};
autoplay();

