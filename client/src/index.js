import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Apollo client setup
const client = new ApolloClient({
  uri: 'https://book-graphql.herokuapp.com/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root'));
