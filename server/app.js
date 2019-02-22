const express = require('express');
const graphqlHTTP = require('express-graphql');

// dotenv
const config = require('dotenv').config();

// Schema
const schema = require('./schema/schema');

// Datebase
const datebase = require('./helper/datebase')();

const app = express();

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}));

app.listen(process.env.PORT, () => 
  console.log(`Server start http://localhost:${process.env.PORT}`)
);