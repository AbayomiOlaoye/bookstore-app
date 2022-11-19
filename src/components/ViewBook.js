import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const ViewBook = (book) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();

  const deleteBook = () => dispatch(removeBook(id));

  return (
    <div className="booklet">
      <p className="title">
        Title:
        {title}
      </p>
      <p className="author">
        Author:
        {author}
      </p>
      <input type="button" value="Remove" onClick={deleteBook} />
    </div>
  );
};

export default ViewBook;
