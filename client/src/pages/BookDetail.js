import React from 'react';

const BookDetail = ({name, genre}) => {
  return(
    <div id="book-details">
     <h2>{ name }</h2>
     <p>{ genre }</p>
    </div>
  );
}

export default BookDetail;
