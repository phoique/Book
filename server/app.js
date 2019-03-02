const express = require('express');
const cors = require('cors');

// Apollo server.
const { ApolloServer } = require('apollo-server-express');

// Graphql schema import tools.
const { importSchema } = require('graphql-import');

// Graphql Schema and Resolvers
const typeDefs = importSchema('./graphql/schema.graphql');
const resolvers = require('./graphql/resolvers/resolvers');

// dotenv
const config = require('dotenv').config();

// Datebase
const datebase = require('./helper/datebase')();

// Express app
const app = express();

// Cors 
app.use(cors());

// Apollo server
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  introspection: true,
  playground: true,  
  });

server.applyMiddleware({ app });

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:/${process.env.PORT}${server.graphqlPath}`)
);