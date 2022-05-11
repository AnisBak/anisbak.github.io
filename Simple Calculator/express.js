var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Routes.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



app.post('/submit-data', function (req, res) {

    if (req.body.operation === 'sum')
        res.send(parseInt(req.body.first) + parseInt(req.body.second)+ '<br><a href="http://localhost:8080">Another Calculation</a>');
    else if (req.body.operation === 'subtract')
        res.send(parseInt(req.body.first) - parseInt(req.body.second)+ '<br><a href="http://localhost:8080">Another Calculation</a>' );
    else if (req.body.operation === 'multiply')
        res.send(parseInt(req.body.first) * parseInt(req.body.second)+ '<br><a href="http://localhost:8080">Another Calculation</a>' );
    else
        res.send(parseInt(req.body.first) / parseInt(req.body.second)+ '<br><a href="http://localhost:8080">Another Calculation</a>' );


});

//Web Server
var server = app.listen(8080, function () {
    console.log('Node server is running..');
});