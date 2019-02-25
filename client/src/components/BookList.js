import React, { Component } from 'react';
import { getBooksQuery } from '../queries/queries';
import { graphql } from 'react-apollo';
import BookDetail from './BookDetail';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    }
  }

  render() {
    const { loading, books } = this.props.data;
    const { book } = this.state;
    return (
      <div>
        <ol id="book-list">
          {
            loading ? 
              "Kitaplar yükleniyor..." 
              : 
              Object.keys(books)
              .map(book => 
                <li 
                key={book} onClick={() => this.setState({ book: (books[book]) })}> 
                {(books[book]).name} 
                </li>)
          }
        </ol>
        {
          this.state.book.name ? 
          <BookDetail book = { book }/>
          : 
          ""
        }
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);