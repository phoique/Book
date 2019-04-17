import React, { Component } from 'react';
import BookList from './pages/Books';
import AddBooks from './pages/AddBooks';
import './style.css';

class App extends Component {
  render() {
    return (
      <div id="main">
        <BookList />
        <AddBooks />
      </div>
    );
  }
}

export default App;
