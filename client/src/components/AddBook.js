import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`

  {
    authors{
      id,
      name
    }
  }

`;

class AddBook extends Component {
  render() {
    const { loading, authors } = this.props.data;
    return (
      <div>
        Kitap ismi: <input type="text" />
        <br />
        Kitap türü: <input type="text" />
        <br />
        Yazar: 
        <select>
          {
            loading 
              ? 
              "" 
              : 
              Object.keys(authors).map(author => 
                <option key={author}>{(authors[author]).name}</option>)
          }
        </select>
        <br />
        <input type="Submit"/>
      </div>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook);
