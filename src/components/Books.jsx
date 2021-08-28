import React from "react";
import BookItem from './BookItem'

function Books({ data }) {
  return (
    <div>
      <h1>Books</h1>
      {data.map((book) => (
        <BookItem book={book} key={book.id}/>
      ))}
    </div>
  );
}

export default Books;
