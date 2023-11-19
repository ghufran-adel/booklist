import { useState } from 'react';
import './App.css';
import Booklist from './Booklist';

function App() {
  const books = [
    "In Search of Lost Time",
    "Don Quixote",
    "One Hundred Years of Solitude"
  ];
  return (
    <>
    <h1>Book List</h1>
    <p>
      in this app you will be able to search for book & add book or delete it
    </p>
    <Booklist books={books}/>
      
    </>
   
  );
}

export default App;
