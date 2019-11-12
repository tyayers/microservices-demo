// importing the dependencies
const tracer = require('@google-cloud/trace-agent').start();
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

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/currencyservice/v1/currencies', (req, res) => {

  var data = JSON.parse(fs.readFileSync("data/currency_conversion.json"));  
  res.send(Object.keys(data));
});

app.post('/currencyservice/v1/convert', (req, res) => {  
  console.log(req.body);
  var data = JSON.parse(fs.readFileSync("data/currency_conversion.json"));

  var result = {
    price: parseFloat((req.body.priceUsd * (1 / data["USD"])) * data[req.body.toCurrency]).toFixed(2)
  }

  console.log(result);

  res.send(result);
});

app.get('/currencyservice/v1/health', (req, res) => {

  res.send("Service is healthy.");
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});