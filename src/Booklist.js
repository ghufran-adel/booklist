function Booklist() {
    const books = [
      "In Search of Lost Time",
      "Don Quixote",
      "One Hundred Years of Solitude"
    ];
  
    return (
      <ul>
        {books.map((book) => (
          <li>{book}</li>
        ))}
      </ul>
    );
  }
  
  export default Booklist;