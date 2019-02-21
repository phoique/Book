const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema
}));

app.get('/', (request, response) => response.send('Hello'));

app.listen(4000, () => console.log('Server start http://localhost:4000'));