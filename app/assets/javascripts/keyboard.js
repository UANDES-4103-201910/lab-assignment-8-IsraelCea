// Note: $(() => {}); is equivalent to $(document).ready(function(){})
/*
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');

};
*/
$(document).ready(function() {

        var keyBoardContainer = document.getElementsByName("kcontainer");

        function hideKeyboard() {
            /*keyBoardContainer.toggle; //ESTO NO FUNCIONA*/
            $('#kcontainer').toggle();//ESTO FUNCIONA BIEN
        }
        //Se define el boton que esconde el teclado y su respectivo evento
        var btnHideShow = document.getElementById("btnEsconder");
        btnHideShow.onclick = hideKeyboard;

        //Se define el cuadro de texto
        var cuadroTexto = document.getElementById("cTexto");


        function fnEscribir() {
            $('#cTexto').append(tecla.text());

            /*var tecla = event.target;
            var textoTecla =  tecla.text();
            cuadroTexto.append(textoTecla);*/
        }


        var tecla = document.getElementsByClassName("key");
        tecla.onclick = fnEscribir;


})


/*
_________________________________________________________________________________________________________
ESTE CODIGO FUNCIONA PARA BOTON CLOSE/HIDE Y ENVÌA EL VALOR DE LA TECLA A LA CONSOLA



$(document).ready(function(){

    console.log('Document ready! [app/assets/javascripts/keyboard.js]');

    $("#btnEsconder").click(function(){
        $('#kcontainer').toggle();
    });

//esta funcion envìa el valor de la tecla a la consola

    $(".key").click(function(){
        console.log($(this).text());
    });


});

____________________________________________________________________________________________________________

*/

