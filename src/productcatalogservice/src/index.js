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
app.get('/products', (req, res) => {

  var data = fs.readFileSync("data/products.json");  
  res.send(data);
});

app.get('/product/:productid', (req, res) => {
  var productid = req.params.productid;

  var data = JSON.parse(fs.readFileSync("data/products.json"));

  var foundItem = false;
  for (const [key, value] of Object.entries(data)) {
    for(const index in data[key]) {
      var item = data[key][index];

      if(item.id == productid) {
        res.send(item);
        foundItem = true;
        break;
      }
    }

    if (foundItem) break;
  }
});

app.get('/search-products', (req, res) => {
  res.send({message: "Not yet implemented."});
});

app.get('/health', (req, res) => {

  res.send("Service is healthy.");
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});