import React, { useState } from 'react';
import BookDetail from './BookDetail';
import { getBooksQuery } from '../queries/queries';
import { useQuery } from 'react-apollo-hooks';

const Books = () => {

  // onClick book detail
  const [bookDetail, setbookDetail] = useState({name: '', genre: ''});
  const { data, error, loading } = useQuery(getBooksQuery);

  if (loading) {
    return <div>Kitaplar yükleniyor...</div>;
  };

  if (error) {
    return <div>Bir sorun oluştu: {error.message}</div>;
  };

  return (
    <div>
      <ol id="book-list">
        {data.books.map(book => (
          <li 
            key={book.id}
            onClick={() => setbookDetail({name: book.name, genre: book.genre})}>
            {book.name}
          </li>
        ))}
      </ol>
      {
        bookDetail.name ? 
          <BookDetail 
            name={bookDetail.name} 
            genre={bookDetail.genre} /> 
        : 
          null
      }
    </div>
  );
};

export default Books;