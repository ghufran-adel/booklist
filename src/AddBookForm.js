import React from 'react';
import { useState } from 'react';
function AddBookForm({uppdatebooks}) {


    const[newBook,setNewBook]=useState('');

    const handleInputChange = (event) => {
        setNewBook(event.target.value);
      };
function handleClick(event){
    event.preventDefault();
    uppdatebooks(newBook);
    setNewBook('');
    
}
  return (
   <>
   <form>
    <input type='text' 
    placeholder='Book title'  
    value={newBook} 
    onChange={handleInputChange}
    />
        
   
    <button onClick={handleClick}>Add Book</button>
   </form>
    </>
  )
}

export default AddBookForm;