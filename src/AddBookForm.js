import axios from 'axios';
import React, { useState } from 'react';

function AddBookForm({ books,updateBooks }) {
  const [newBook, setNewBook] = useState('');

  const handleInputChange = (event) => {
    setNewBook(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://6552f02e5449cfda0f2defd1.mockapi.io/api/books', { title: newBook });
      updateBooks(response.data);
      setNewBook('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Book title"
          value={newBook}
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>Add Book</button>
      </form>
    </>
  );
}

export default AddBookForm;
