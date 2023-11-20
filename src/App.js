import { useState } from 'react';
import './App.css';
import Booklist from './Bookslist';
import AddBookForm from './AddBookForm';





function App() {
  const [books,setBooks] = useState([
    "In Search of Lost Time",
    "Don Quixote",
    "One Hundred Years of Solitude"
  ]);

  const uppdatebooks = (newBook) => {
    setBooks([...books, newBook]);
  };

  
  return (
    <>
    <h1>Book List</h1>
    <p>
      in this app you will be able to search for book & add book or delete it
    </p>
    <AddBookForm uppdatebooks={uppdatebooks}/>
    <Booklist books={books} setBooks={setBooks} />
      
    </>
   
  );
}

export default App;
