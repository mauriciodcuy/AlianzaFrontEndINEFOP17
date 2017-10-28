var request = require("request");
var baseURL = 'https://api.themoviedb.org/3';



addMovieToList(36528, 888);


function addMovieToList(list_id, movie_id) {
    var options = getBasicOptions();
    options.body = {
        media_id: movie_id
    };
    var url = baseURL + '/list/' + list_id + '/add_item';
    request.post(url, options, function(error, response, body) {
        if (error) {
            console.log('Error', error);
            return;
        }
        console.log(body);
    });
}





function getBasicOptions() {
    return {
        qs: {
            api_key: '1fd5a022709eb089b7f8cb5a40810e15',
            session_id: 'b4d6625fadd9d5b1eab068a57717d89186b36bf8'
        },
        headers: {
            'content-type': 'application/json;charset=utf-8'
        },
        json: true
    };
}