// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require("fs");

const dotenv = require('dotenv');
dotenv.config();

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/productcatalogservice/v1/products', (req, res) => {

  var data = fs.readFileSync("data/products.json");  
  res.send(data);
});

app.get('/productcatalogservice/v1/product/:productid', (req, res) => {
  var productid = req.params.productid;

  var data = JSON.parse(fs.readFileSync("data/products.json"));

  data.products.forEach(function(item, index) {
    if(item.id == productid) {
      res.send(item);
    }
  });

  
});

app.get('/product-catalog-service/search-products', (req, res) => {
  res.send(ads);
});

app.post('/currency-service/convert', (req, res) => {
    try {
        _getCurrencyData((data) => {
            const request = call.request;

            // Convert: from_currency --> EUR
            const from = request.from;
            const euros = _carry({
            units: from.units / data[from.currency_code],
            nanos: from.nanos / data[from.currency_code]
            });

            euros.nanos = Math.round(euros.nanos);

            // Convert: EUR --> to_currency
            const result = _carry({
            units: euros.units * data[request.to_code],
            nanos: euros.nanos * data[request.to_code]
            });

            result.units = Math.floor(result.units);
            result.nanos = Math.floor(result.nanos);
            result.currency_code = request.to_code;

            logger.info(`conversion request successful`);
            callback(null, result);
        });
    } catch (err) {
        //logger.error(`conversion request failed: ${err}`);
        callback(err.message);
    }
});

app.get('/productcatalogservice/health', (req, res) => {

  res.send("Service is healthy.");
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});