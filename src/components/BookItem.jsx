import axios from "axios";
import React, { useState } from "react";

function BookItem({ book }) {
  const [item, setItem] = useState(book);
  const updateBook = () => {
    axios.put(`http://localhost:5000/book/${item.id}`, {
      id: item.id,
      name: item.name,
    })
    .then(response=>alert(`Updated`))
    .catch(error=>alert(error))
  };  
  const deleteBook = () => {
    axios.delete(`http://localhost:5000/book/${item.id}`)
    .then(response=>alert(`Deleted`))
    .catch(error=>alert(error))
  };
  return (
    <div>
      <input
        value={item.name}
        onChange={(e) => setItem({ id: item.id, name: e.target.value })}
        type="text"
      />
      <button onClick={updateBook}>Update</button>
      <button onClick={deleteBook}>Delete</button>
    </div>
  );
}

export default BookItem;
