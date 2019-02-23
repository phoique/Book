import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Book from './Book';

const getBooksQuery = gql`
  {
    books {
      id,
      author_id,
      name,
      genre
    }
  }

`;

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