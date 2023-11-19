import { useState } from 'react';
import './App.css';
import Booklist from './Booklist';
import AddBookForm from './AddBookForm';
function App() {
  const [books,setBooks] = useState([
    "In Search of Lost Time",
    "Don Quixote",
    "One Hundred Years of Solitude"
  ]);
  return (
    <>
    <h1>Book List</h1>
    <p>
      in this app you will be able to search for book & add book or delete it
    </p>
    <AddBookForm/>
    <Booklist books={books}/>
      
    </>
   
  );
}

export default App;
