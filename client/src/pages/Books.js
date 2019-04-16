import React from 'react';
import { getBooksQuery } from '../queries/queries';
import { useQuery } from 'react-apollo-hooks';

const Books = () => {
  const { data, error, loading } = useQuery(getBooksQuery);
  
  if (loading) {
    return <div>Kitaplar yükleniyor...</div>;
  };

  if (error) {
    return <div>Bir sorun oluştu: {error.message}</div>;
  };

  return (
    <ol id="book-list">
      {data.books.map(book => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ol>
  );
};

export default Books;