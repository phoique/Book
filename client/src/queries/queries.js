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

export { getAuthorsQuery, getBooksQuery };