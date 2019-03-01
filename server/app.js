const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

// Graphql schema import tools.
const { importSchema } = require('graphql-import');

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

const resolvers = {
  Query: {
    book: () => 'Apollo Server'
  }
};

// Graphql Schema
const typeDefs = importSchema('./graphql/schema.graphql');

// Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(4000, 
  console.log(`http://localhost:${server.graphqlPath}`));