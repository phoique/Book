import React, { Component } from 'react';
import { getBooksQuery } from '../queries/queries';
import { graphql } from 'react-apollo';
import Book from './Book';

class BookList extends Component {
  render() {
    const { loading, books } = this.props.data;
    return (
      <div>
        <ol>
          {
            loading ? 
              "Kitaplar yükleniyor..." 
              : 
              Object.keys(books)
              .map(book => 
                <Book key={book} bookName={books[book]} />)
          }
        </ol>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);