const express = require("express");
const axios = require('axios');
const history = require('connect-history-api-fallback-exclusions');
const dotenv = require('dotenv');
dotenv.config();

var app = express();
app.use(history({
    exclusions: [
        "/parameters/*"
    ]
}));

//app.use("/hipster", express.static('dist'));
app.use(express.static('dist'));


// defining an endpoint to return all currencies
app.get('/parameters/v1/:name', (req, res) => {
    var name = req.params.name;
    console.log("parameter: " + name + "=" + process.env[name]);
    res.send({result: process.env[name]});
});

var server = app.listen(process.env.PORT, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});