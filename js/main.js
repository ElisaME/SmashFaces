$(document).ready(function(){
   var imagenes = [
      "Alma Patricia Jimenez.JPG",  "Ana Maria Barbosa.JPG",
      "Analy Miranda.JPG",          "Areli Rodriguez.JPG",
      "Beatriz Quesadas.JPG",       "Claudia Hernández.JPG",
      "Daniela Belem García.JPG",   "Elisa Guadalupe Martínez.JPG",
      "Evelyn Vázquez.JPG",         "Gabriela Peñaloza.JPG",
      "Grissel Coutiño.JPG",        "Guadalupe Guerrero.JPG",
      "Johana Alexa Vargas.JPG",    "Joyce Zeltzin Hernández.JPG",
      "Juana Ofelia García.JPG",    "Karen A. Sha ron De Diego.JPG",
      "Karen Cruz Heredia.JPG",     "Karen Quiroz.JPG",
      "Karla Monica Llerenas.JPG",  "Karla Vargas.JPG",
      "Leslie Anigail Vazquez.JPG", "Lilian Mishel Martínez.JPG",
      "Milca Sarai Del Angel.JPG",  "Naibit Leonel.JPG",
      "Nayeli Carbajal.JPG",        "Nelly Montserrat Saavedra.JPG",
      "Reyna Hernández.JPG",        "Rubí Adriana Santiago.JPG",
      "Ruth López.JPG",             "Ruth Zacnicte Vega.JPG",
      "Sandra Bollo.JPG",           "Sandra Díaz.JPG",
      "Vianey Tavatha Moreno.JPG",  "Zazil Aurora Martinez.JPG"
   ];
   var nombres = [ "Paty", "Ana", "Analy", "Areli", "Beatriz", "Claudia", 
      "Daniela", "Elisa", "Evelyn", "Gabriela", "Griss", "Lupita", "Johana", 
      "Joyce", "Ofelia", "Sharon", "Karen", "Karen", "Monica", "Karla", "Leslie", 
      "Lilian", "Milca", "Naibit", "Nayeli", "Nelly", "Reyna", "Adriana", "Ruth",
      "Ruth", "Sandra", "San", "Vianey", "Zazil"
   ];

   //Funcion numero Aleatorio, para elegir imagen de array
   function numeroAleatorio(min, max) {
      var numero = Math.random() * (max - min) + min;
      var entero = Math.round(numero);
      return entero;
   };
   var tamano= imagenes.length;
   var num=numeroAleatorio(0,tamano);
   
   //Inserta imagen aleatoria en el html FUNCIONA!
   function imagenAleatoria(){
      $('#caja-foto').html('<img id="foto" alt='+ nombres[num] +' src="fotos/'+ imagenes[num] +' "/>' );   
   };
   
   //Cuando seleccionen la opcion Mexico se llama a la funcion imagenAleatoria
   $('#sedes').change(function(){
      var sede=$(this).val();
      if (sede=="mexico"){
         imagenAleatoria();
      }
   });

   //Iniciar puntaje en cero
   var totalPuntos=0;

   //Para contar los intentos YA FUNCIONAN ALERTAS DE INTENTOS
   var intentos=0
   var i=4

   //Comprobar respuesta
   $('#btnConfirmar').click(function(){
      //FUNCIONA la comparacion
      var nombre=$('#inputNombre').val().toLowerCase();
      var nombreImagen=$("#foto").attr("alt").toLowerCase();
      //En cada click se incrementa el numero de intentos
      intentos++
      //Comparar nombre de imagen con input
      if(nombre==nombreImagen){
         alert("Bien hecho!");
         // No sale otra imagen
         imagenAleatoria();
         totalPuntos+=5
         $("span").text(totalPuntos);
      }else{
         if(intentos<5){
            alert("Incorrectotienes " + i + "intentos mas");
             i-- 
         } else {
            alert("Lo siento se acabaron tus intentos! Prueba con otra imagen");
            // No sale otra imagen
            imagenAleatoria();
            totalPuntos--
            $("span").text(totalPuntos);
         }
      }
   });
});
   

   