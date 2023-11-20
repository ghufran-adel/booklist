function Booklist({ books ,setBooks }) {

 const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index,1);
    setBooks(updatedBooks);
  }

 
    return (
      <>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <button style={{color :'red' , margin:'0.5rem'}} onClick={() => handleDeleteBook(index)} >x</button>
              {book}
            </li>
          ))}
        </ul>
      </>
    );
  }
  
  export default Booklist;