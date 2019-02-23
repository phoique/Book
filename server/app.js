const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

// dotenv
const config = require('dotenv').config();

// Schema
const schema = require('./schema/schema');

// Datebase
const datebase = require('./helper/datebase')();

// Express app
const app = express();

// Cors 
app.use(cors());

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}));

app.listen(process.env.PORT, () => 
  console.log(`Server start http://localhost:${process.env.PORT}`)
);