import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import AddBook from './AddBook';
import ViewBook from './ViewBook';
import { getBooks } from '../redux/books/books';

const ShowBooks = () => {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.Books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {library.map((book) => (
        <div key={book.item_id} className="card">
          <ViewBook
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        </div>
      ))}
      <AddBook />
    </div>
  );
};

export default ShowBooks;
