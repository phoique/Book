import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`

  {
    authors{
      id,
      name
    }
  }

`;

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

const addBookMutation = gql`

  mutation addBook($author_id: ID! ,$name: String!, $genre: String!) {
    addBook(author_id: $author_id, name: $name, genre: $genre) {
      id,
      name
    }
  }

`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };