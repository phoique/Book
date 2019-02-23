import React, { Component } from 'react';
import BookList from './BookList';
import AddBook from './AddBook';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello</p>
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default App;
