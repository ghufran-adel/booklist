function Booklist({books}) {
    
  
    return (
      <ul>
        {books.map((book) => (
          <li>{book}</li>
        ))}
      </ul>
    );
  }
  
  export default Booklist;