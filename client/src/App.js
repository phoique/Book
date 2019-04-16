import React, { Component } from 'react';
import BookList from './pages/Books';
import AddBook from './pages/AddBooks';
import './style.css';

class App extends Component {
  render() {
    return (
      <div id="main">
        <BookList />

      </div>
    );
  }
}

export default App;
