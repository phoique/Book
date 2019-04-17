import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`

  query{
    authors{
      id,
      name
    }
  }

`;

const getBooksQuery = gql`
  
  query{
    books {
      id,
      author_id,
      name,
      genre
    }
  }

`;

const addBookMutation = gql`

  mutation($author_id: ID!, $name: String!, $genre: String!) {

    createBook(input: {
      author_id: $author_id,
      name: $name, 
      genre: $genre
    }) {
      name
    }

  }

`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };