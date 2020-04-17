var http = require('http');
var buffer_corpo_response = [];
var opcoes = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    method: 'post',    
    headers: {
        'Accept': 'application/json',
        //'Content-type': 'application/x-www-form-urlencoded'
        'Content-type': 'application/json'
    }
}

//Content-type

var html = 'nome=José'; //x-www-form-urlencoded
var json = {nome: 'José'}
var strJson = JSON.stringify(json);
//http.get('http://localhost', function(res){
var req = http.request(opcoes, function (res) {
    res.on('data', function (pedaco) {
        //console.log(' ' + pedaco);
        buffer_corpo_response.push(pedaco);
    });

    res.on('end', function () {
        var corpoResponse = Buffer.concat(buffer_corpo_response).toString();
        console.log(corpoResponse);
    });

    res.on('error', function () {

    });
});

req.write(strJson);
req.end();