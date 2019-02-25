import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: '',
      name: '',
      genre: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveBook = this.saveBook.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  saveBook() {
    this.props.addBookMutation({
      variables: {
          author_id: this.state.author_id,
          name: this.state.name,
          genre: this.state.genre
      },
      refetchQueries: [{ query: getBooksQuery }]
  });
  }

  render() {
    const { loading, authors } = this.props.getAuthorsQuery;
    return (
      <div id="add-book">
        <form>
          Kitap ismi: <input name ="name" type="text" onChange={this.handleChange} />
          <br />
          Kitap türü: <input name="genre" type="text" onChange={this.handleChange} />
          <br />
          Yazar: 
          <select onChange={this.handleChange} name="author_id">
            <option>Yazar seçin.</option>
            {
              loading 
                ? 
                "" 
                : 
                Object.keys(authors).map(author => 
                  <option value={(authors[author]).id} key={author}>{(authors[author]).name}</option>)
            }
          </select>
          <br />
          <input type="submit" onClick={this.saveBook}/>
        </form>
      </div>
    )
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);