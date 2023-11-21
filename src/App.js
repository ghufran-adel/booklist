import { useState, useEffect } from 'react';
import './App.css';
import Booklist from './Bookslist';
import AddBookForm from './AddBookForm';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]); 

  useEffect(() => {
    axios.get('https://6552f02e5449cfda0f2defd1.mockapi.io/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 
   
  const updateBooks = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <>
      <h1>Books List</h1>
      <p>
        In this app, you will be able to add books, or delete them.
      </p>
      <AddBookForm updateBooks={updateBooks} />
      <Booklist books={books} setBooks={setBooks} />
    </>
  );
}

export default App;
