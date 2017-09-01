$().ready(function() {

    mostrarPeliculas();



})

function mostrarPeliculas() {
    $("#nuevaPelicula").hide();
    $("#cDirectores").hide();
    $("#cActores").hide();
    $("#cUsuarios").hide();
    $("#cPeliculas").show();
}

function mostrarUsuarios() {
    $("#nuevaPelicula").hide();
    $("#cDirectores").hide();
    $("#cActores").hide();
    $("#cUsuarios").show();
    $("#cPeliculas").hide();
}

function mostrarActores() {
    $("#nuevaPelicula").hide();
    $("#cDirectores").hide();
    $("#cActores").show();
    $("#cPeliculas").hide();
    $("#cUsuarios").hide();
}

function mostrarDirectores() {
    $("#nuevaPelicula").hide();
    $("#cDirectores").show();
    $("#cActores").hide();
    $("#cPeliculas").hide();
    $("#cUsuarios").hide();


}

//EVENTO MOSTRAR - ESCONDER NUEVA PELI
function mostrarNuevaPeli() {
    $("#nuevaPelicula").show();
}

function esconderNuevaPeli() {
    $("#nuevaPelicula").hide();
}

//--------------------------------------------------------------------------------

//EVENTO AGREGAR NUEVA PELI



//$("#btnAgregarPeli").volver todos los valores a 0 de nueva peli); FUNCION 
//$("#btnAgregarPeli").volver todos los valores a 0 de nueva peli); FUNCION