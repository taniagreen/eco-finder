const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');


const USERS_TABLE = process.env.USERS_TABLE;
const IS_OFFLINE = process.env.IS_OFFLINE;
let dynamoDb;
if (IS_OFFLINE === 'true') {
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  })
  console.log(dynamoDb);
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
};

app.use(bodyParser.json({ strict: false }));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Get places by category
app.get('/categories/:category', function (req, res) {
  const params = {
    TableName: USERS_TABLE,
    FilterExpression: 'category = :hkey',
    ExpressionAttributeValues: {
      ':hkey': req.params.category
    }
  }

  dynamoDb.scan(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  
    if (result && result.Items) {
      res.json(result.Items);
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  });
})

// Get places by category
app.get('/categories', function (req, res) {
  const params = {
    TableName: USERS_TABLE,
    // FilterExpression: 'category = :hkey',
    // ExpressionAttributeValues: {
    //   ':hkey': req.params.category
    // }
  }

  dynamoDb.scan(params, (error, result) => {
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Credentials',true);
    if (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  
    if (result && result.Items) {
      res.json(result.Items);
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  });
})

// Create categories
app.post('/categories', function (req, res) {
  const { category, name, address, description, latitude, longitude } = req.body;
  if (typeof category !== 'string') {
    res.status(400).json({ error: '"category" must be a string' });
  } else if (typeof name !== 'string') {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      category: category,
      name: name,
      description: description,
      latitude: latitude,
      longitude: longitude,
      address: address
    },
  };

  dynamoDb.put(params, (error) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not create category' });
    }
    res.json({ category, name });
  });
})

module.exports.handler = serverless(app);