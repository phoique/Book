import React, { Component } from 'react';
import { getBooksQuery } from '../queries/queries';
import { Query } from 'react-apollo';
import BookDetail from './BookDetail';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    }
  }

  render() {
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
                    
                    books.map(book => 
                      <li 
                      key = {book.idc} onClick={() => this.setState({ book: book })}> 
                      {book.name} 
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

export default BookList;