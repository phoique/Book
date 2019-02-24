import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: '',
      name: '',
      genre: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { loading, authors } = this.props.data;
    return (
      <div>
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
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook);
