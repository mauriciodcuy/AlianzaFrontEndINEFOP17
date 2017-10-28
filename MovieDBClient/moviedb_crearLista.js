var request = require("request");
var baseURL = 'https://api.themoviedb.org/3';



addNewList();

function addNewList() {
    var options = getBasicOptions();
    var url = baseURL + '/list';
    var body = "";
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
        body: {
            name: "Lista Rota",
            description: "Lista desde node",
            language: "en"
        },
        json: true
    };
}