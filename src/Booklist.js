

function Booklist({ books }) {
    return (
      <>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </>
    );
  }
  
  export default Booklist;