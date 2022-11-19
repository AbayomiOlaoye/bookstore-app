import React, { useSelector } from 'react-redux';
import AddBook from './AddBook';
import ViewBook from './ViewBook';

const ShowBooks = () => {
  const library = useSelector((state) => state.Books);

  return (
    <div>
      {library.map((book) => (
        <div key={book.id} className="card">
          <ViewBook id={book.id} title={book.title} author={book.author} />
        </div>
      ))}
      <AddBook />
    </div>
  );
};

export default ShowBooks;
