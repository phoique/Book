const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
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

const typeDefs = gql`

  type Query {
    message: String
  }

`;

const resolvers = {
  Query: {
    message: () => 'Apollo Server'
  }
};


// Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(4000, 
  console.log(`http://localhost:${server.graphqlPath}`));