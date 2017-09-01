var idPelis = 0;
var idDirector = 0;
var idActor = 0;
var aPeliculas = [];
var aUsuarios = [];
var aDirectores = [];
var aActores = [];
//filtros---------------------------------------
var aFiltroPeliTitulo = [];
var aFiltroPeliPuntaje = [];
var aUsuarioPorNombre = [];
var aUsuarioPorNacionalidad = [];
//consultas--------------------------------------
var aDirectoresMasDeDiezPeliculas = [];
var aPelisMasDeDiezAcotres = [];
var aPeliConMasFavoritos = [];
var aDiezActoresMayorEdad = [];
var aDiezUsuariosFemeninosMenorEdad = [];
var aActoresDePeliculaMasReciente = [];
var aUsuarioMayorPromedioPuntajeFavoritos = [];
var aDiezAcotresDeLasDiezPelisMasPopulares = [];
var aDiezAcotresMasPelis = [];
var aPelisUsuarioMayorEdad = [];

//CONSTRUCTORES

function Pelicula(id, titulo, fecha, puntaje, director, actores, descripcion, imagenes) {

    this.id = id;
    this.titulo = titulo;
    this.fecha = fecha;
    this.puntaje = puntaje;
    this.director = director;
    this.actores = actores;
    this.descripcion = descripcion;
    this.imagenes = imagenes;

}

function Usuario(pelisFavoritas, nombre, apellido, fecDeNac, sexo) {
    this.pelisFavoritas = pelisFavoritas;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecDeNac = fecDeNac;
    this.sexo = sexo;

}

function Director(id, paisOrigen, biografia, imgPerfil, nombre, apellido, fecDeNac, sexo, director) {
    this.id = id;
    this.paisOrigen = paisOrigen;
    this.biografia = biografia;
    this.imgPerfil = imgPerfil;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecDeNac = fecDeNac;
    this.sexo = sexo;
    this.director = director;
}

function Actor(id, paisOrigen, biografia, imgPerfil, nombre, apellido, fecDeNac, sexo, actor) {
    this.id = id;
    this.paisOrigen = paisOrigen;
    this.biografia = biografia;
    this.imgPerfil = imgPerfil;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecDeNac = fecDeNac;
    this.sexo = sexo;
    this.actor = actor;
}




//METODOS---------------------------------------------------------


//Nueva pelicula


function ingresarPersona() {

    var titulo = $("#tituloNP").val();
    var fecha = $("#fechaNP").val();
    var puntaje = $("#puntajeNP").val();
    var director = $("#directorNP").val();
    var actores = $("#actoresNP").val();
    var descripcion = $("#descripcionNP").val();
    var imagenes = $("#imagen1NP").val();


    var nuevaPelicula = new Pelicula(idPelis, titulo, fecha, puntaje, director, actores, descripcion, imagenes);
    aPeliculas.push(nuevaPelicula);
    idPelis = idPelis + 1;
}


//Elimiar pelicula
function ePeliculas() {};
//Nuevo Usuario
function nUsuario() {};
//Nuevo Director      
function nDirector() {};
//Nuevo Actor
function nActor() {};




//FILTROS------------------------------------------------------------
function filtroPeliTitulo() {};

function filtroPeliPuntaje() {};

function usuarioPorNombre() {};

function usuarioPorNacionalidad() {};

//CONSULTAS
function directoresMasDeDiezPeliculas() {};

function pelisMasDeDiezAcotres() {};

function diezActoresMayorEdad() {};

function diezActoresMayorEdad() {};

function diezUsuariosFemeninosMenorEdad() {};

function actoresDePeliculaMasRecientes() {};

function usuarioMayorPromedioPuntajeFavoritos() {};

function diezAcotresDeLasDiezPelisMasPopulares() {};

function diezAcotresMasPelis() {};

function pelisUsuarioMayorEdad() {};