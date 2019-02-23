import React from 'react';

const Book = props => {
  return (
    <div>
      <ol key={props.bookName.id}>
        <li> {props.bookName.name} </li>
      </ol>
    </div>
  );
}

export default Book;