import React from 'react';

const BookDetail = (props) => {
  return(
    <div id="book-details">
     <h2>{ props.book.name }</h2>
     <p>{ props.book.genre }</p>
    </div>
  );
}

export default BookDetail;
