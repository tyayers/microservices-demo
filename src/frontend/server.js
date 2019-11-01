const express = require("express");
const axios = require('axios');
const history = require('connect-history-api-fallback');
const dotenv = require('dotenv');
dotenv.config();

var app = express();
app.use(history());

//app.use("/hipster", express.static('dist'));
app.use(express.static('dist'));


// defining an endpoint to return all currencies
app.get('/currencyservice/v1/currencies', (req, res) => {

    axios({ method: "GET", "url": process.env.CURRENCY_SVC_URL + "/v1/currencies" }).then(result => {
        res.send(result.data);
    }).catch(function (error) {
        // handle error
        console.log(error);
        res.send(["USD", "EUR", "TBD"]);
    });    
});

app.get('/productcatalogservice/v1/products', (req, res) => {

    axios({ method: "GET", "url": process.env.PRODUCT_SVC_URL + "/v1/products" }).then(result => {
        res.send(result.data);
    }).catch(function (error) {
        // handle error
        console.log(error);
        res.send("error");
    });    
});

var server = app.listen(process.env.PORT, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});