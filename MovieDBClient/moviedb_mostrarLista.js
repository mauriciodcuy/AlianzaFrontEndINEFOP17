var request = require("request");
var baseURL = 'https://api.themoviedb.org/3';



getListInfo(36528);


function getListInfo(list_id) {
    var options = getBasicOptions();
    var url = baseURL + '/list/' + list_id;
    request.get(url, options, function(error, response, body) {
        if (error) {
            console.log('Error', error);
            return;
        }
        console.log(body);
        console.log("Empieza la response --");
        console.log(response);
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