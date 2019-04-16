import React, { Component } from 'react';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import './style.css';

class App extends Component {
  render() {
    return (
      <div id="main">
        <BookList />
        <AddBook />
      </div>
    );
  }
}

export default App;
