import axios from 'axios';

function Booklist({ books, setBooks }) {

  const handleDeleteBook = async (ID) => {
    try {
      await axios.delete(`https://6552f02e5449cfda0f2defd1.mockapi.io/api/books/${ID}`);
      
      const updatedBooks = books.filter((book) => book.id !== ID);
     
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  }

  return (
    <>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <button style={{ color: 'red', margin: '0.5rem' }} onClick={() => handleDeleteBook(book.id)}>x</button>
            {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Booklist;
