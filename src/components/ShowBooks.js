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
    <div className="container">
      {library.map((book, index) => (
        <ViewBook
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          index={index}
        />
      ))}
      <hr />
      <AddBook />
    </div>
  );
};

export default ShowBooks;
