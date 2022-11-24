import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const ViewBook = (book) => {
  const {
    id,
    title,
    author,
    category,
  } = book;

  const dispatch = useDispatch();

  const deleteBook = () => dispatch(removeBook(id));

  return (
    <div className="booklet-card flex">
      <div className="book-card">
        <div className="book-info">
          <p className="category">{category}</p>
          <p className="title">{title}</p>
          <p className="author">{author}</p>
          <div className="book-actions flex">
            <button type="button">Comment</button>
            <button type="button" onClick={deleteBook}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
