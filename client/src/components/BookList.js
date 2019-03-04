import React, { Component } from 'react';
import { getBooksQuery } from '../queries/queries';
import { graphql, Query } from 'react-apollo';
import BookDetail from './BookDetail';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    }
  }

  render() {
    console.log(this.props)
    const { book } = this.state;
    return (
      <Query query = {getBooksQuery}>
        {
          ({ loading, data: {books}, error }) => 
            <div>
              <ol id="book-list">
                {
                  loading ? 
                    "Kitaplar yükleniyor..." 
                    : 
                    Object.keys(books)
                    .map(book => 
                      <li 
                      key = {book} onClick={() => this.setState({ book: (books[book]) })}> 
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
        }
      </Query>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

/*  

Object.keys(books)
                    .map(book => 
                      <li 
                       onClick={() => this.setState({ book: (books[book]) })}> 
                      {(books[book])} 
                      </li>)

*/