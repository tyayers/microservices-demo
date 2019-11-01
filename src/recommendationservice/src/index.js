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
app.get('/recommendationservice/recommendations/:productid', (req, res) => {
  var productid = req.params.productid;
  var data = JSON.parse(fs.readFileSync("data/recommendations.json"));

  if (data[productid] != undefined) {
    var products = [];
    var counter = 0;

    data[productid].forEach(function(element) {
      var url = process.env.PRODUCT_SVC_URL + "/v1/product/" + element;

      axios({ method: "GET", "url": url, headers: {"x-api-key": process.env.PRODUCT_KEY} }).then(result => {
        products.push(result.data);
        counter++;

        if (counter == data[productid].length)
        {
          // We have all product data
          res.send(products);
        }
      }).catch(function (error) {
          // handle error
          console.log(error);
          res.send([]);
      });
    });
  }
  else
    res.send([]);
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});