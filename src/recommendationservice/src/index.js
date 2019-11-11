// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require("fs");
const axios =require("axios");

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
app.get('/recommendationservice/v1/recommendations/:productid', (req, res) => {
  var productid = req.params.productid;
  var data = JSON.parse(fs.readFileSync("data/recommendations.json"));

  if (data[productid] != undefined) {
    res.send(data[productid]);
  }
  else
    res.send([]);
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});