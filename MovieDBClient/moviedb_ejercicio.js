var request = require("request");
var baseURL = "https://api.themoviedb.org/3";

addNewList();

function addNewList() {
    var options = getBasicOptions();
    var url = baseURL + "/list";
    options.body = {
        name: 'Lista Rotisima',
        description: 'Lista desde node2',
        language: 'en'
    };
    request.post(url, options, function(error, response, body) {
        if (error) {
            console.log("Error", error);
            return;
        }
        console.log("Se creo lista!");
        var lista = body.list_id;
        var pelis = [858, 848, 898];
        for (var i = 0; i < pelis.length; i++) {
            addMovieToList(lista, pelis[i]);
        }
        if (body = success) {
            for (var j = 0; j < 1; j++) {
                deleteMovieFromList(lista, pelis[i]);
            }
        }
        console.log()
        getListInfo(lista);
    });
}

function addMovieToList(list_id, movie_id) {
    var options = getBasicOptions();
    options.body = {
        media_id: movie_id
    };
    var url = baseURL + "/list/" + list_id + "/add_item";
    request.post(url, options, function(error, response, body) {
        if (error) {
            console.log("Error", error);
            return;
        }
        console.log("Se agrego peli!");
    });
}

function deleteMovieFromList(list_id, movie_id) {
    var options = getBasicOptions();
    var url = baseURL + "/list/" + list_id + "/remove_item";
    var body = movie_id;

    request.post(url, options, function(error, response, body) {
        if (error) {
            console.log("Error", error);
            return;
        }
        console.log("Se borro peli!");
    });
}


function getListInfo(list_id) {
    var options = getBasicOptions();
    var url = baseURL + '/list/' + list_id;
    request.get(url, options, function(error, response, body) {
        if (error) {
            console.log('Error', error);
            return;
        }
        console.log(body);
    });
}

//Stack de Llamadas

function llamadas() {

    /*addMovieToList(36528, 897);
    addMovieToList(36528, 1288);
    addMovieToList(36528, 589);
    deleteMovieFromList(36528, 589);
    deleteMovieFromList(36528, 897);
    getListInfo(36528);*/
}

function getBasicOptions() {
    return {
        qs: {
            api_key: "1fd5a022709eb089b7f8cb5a40810e15",
            session_id: "b4d6625fadd9d5b1eab068a57717d89186b36bf8"
        },
        headers: {
            "content-type": "application/json;charset=utf-8"
        },
        json: true
    };
}