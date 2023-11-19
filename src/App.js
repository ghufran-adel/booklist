import { useState } from 'react';
import './App.css';
import Booklist from './Booklist';

function App() {
 
  return (
    <>
    <h1>Book List</h1>
    <p>
      in this app you will be able to search for book & add book or delete it
    </p>
    <Booklist/>
      
    </>
   
  );
}

export default App;
